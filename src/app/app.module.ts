import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCameraComponent } from './create-camera/create-camera.component';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { CameraListComponent } from './camera-list/camera-list.component';
import { UpdateCameraComponent } from './update-camera/update-camera.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCameraComponent,
    CameraDetailsComponent,
    CameraListComponent,
    UpdateCameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
