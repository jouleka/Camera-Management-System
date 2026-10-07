import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './e2e/src', testMatch: '**/*.e2e-spec.ts',
  use: { baseURL: 'http://127.0.0.1:4211', channel: process.env['CI'] ? 'chromium' : 'chrome', headless: true },
  webServer: { command: 'npm start -- --host 127.0.0.1 --port 4211', url: 'http://127.0.0.1:4211', reuseExistingServer: false },
});
