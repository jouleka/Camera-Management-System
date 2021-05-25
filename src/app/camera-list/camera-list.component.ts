import { CameraDetailsComponent } from './../camera-details/camera-details.component';
import { CameraService } from './../camera.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Camera } from '../camera';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.css']
})
export class CameraListComponent implements OnInit {
  cameras: Observable<Camera[]> | any;

  constructor(private cameraService: CameraService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.cameras = this.cameraService.getCamerasList();
  }

  deleteCamera(id: string) {
    this.cameraService.deleteCamera(id)
    .subscribe(
      (      data: any) => {
        console.log(data);
        this.reloadData();
      },
      (      error: any) => console.log(error));
  }

  cameraDetails(id: string) {
    this.router.navigate(['details', id]);
  }

  updateCamera(id: string) {
    this.router.navigate(['update', id]);
  }

}
