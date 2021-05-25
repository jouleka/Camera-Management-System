import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { UpdateCameraComponent } from './update-camera/update-camera.component';
import { CreateCameraComponent } from './create-camera/create-camera.component';
import { CameraListComponent } from './camera-list/camera-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'camera', pathMatch: 'full' },
  { path: 'cameras', component: CameraListComponent },
  { path: 'add', component: CreateCameraComponent },
  { path: 'update/:id', component: UpdateCameraComponent },
  { path: 'details/:id', component: CameraDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
