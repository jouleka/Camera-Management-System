import { test, expect } from '@playwright/test';

test('camera list, details, edit and deletion work after the framework migration', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  const camera = { id: 'camera-1', name: 'Front door', model: 'Model A', resolution: '1920x1080', ip: '192.0.2.1' };
  let deleted = false;
  await page.route('http://localhost:8080/api/cameras**', async route => {
    const request = route.request();
    if (request.method() === 'DELETE') deleted = true;
    if (request.method() === 'PUT') Object.assign(camera, request.postDataJSON());
    const body = request.url().endsWith('/api/cameras') ? (deleted ? [] : [camera]) : camera;
    await route.fulfill({ contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify(body) });
  });
  await page.goto('/cameras');
  await expect(page.getByRole('cell', { name: 'Front door', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Details' }).click();
  await expect(page).toHaveURL(/details\/camera-1/);
  await expect(page.locator('body')).toContainText('Front door');
  await page.getByRole('link', { name: 'Camera List' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.locator('#name')).toHaveValue('Front door');
  await page.locator('#name').fill('Updated camera');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('cell', { name: 'Updated camera', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('cell', { name: 'Updated camera', exact: true })).toHaveCount(0);
  expect(deleted).toBe(true);
  expect(errors).toEqual([]);
});

test('camera creation sends all user-entered fields to the existing API', async ({ page }) => {
  let saved: any;
  await page.route('http://localhost:8080/api/cameras**', async route => {
    if (route.request().method() === 'POST') saved = route.request().postDataJSON();
    await route.fulfill({ contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify(route.request().method() === 'GET' ? [] : { id: 'new-camera' }) });
  });
  await page.goto('/add');
  for (const [field, value] of Object.entries({ name: 'Lobby', model: 'Model B', resolution: '4K', ip: '192.0.2.2' })) await page.locator('#'+field).fill(value);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect.poll(() => saved).toEqual({ name: 'Lobby', model: 'Model B', resolution: '4K', ip: '192.0.2.2' });
});
