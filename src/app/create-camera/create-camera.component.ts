import { CameraService } from './../camera.service';
import { getLocalePluralCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camera } from '../camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-camera',
  templateUrl: './create-camera.component.html',
  styleUrls: ['./create-camera.component.css']
})
export class CreateCameraComponent implements OnInit {

  camera: Camera = new Camera();
  submitted = false;

  constructor(private cameraService: CameraService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newCamera(): void {
    this.submitted = false;
    this.camera = new Camera();
  }

  save() {
    this.cameraService
    .createCamera(this.camera)
    .subscribe(data => console.log(data), error => console.log(error));
    this.camera = new Camera();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/cameras']);
  }

}
