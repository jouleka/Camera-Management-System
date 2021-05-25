import { CameraService } from './../camera.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Camera } from '../camera';

@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.css']
})
export class CameraDetailsComponent implements OnInit {

  id: string | any;
  camera: Camera | any;

  constructor(private route: ActivatedRoute, private router: Router,
              private cameraService: CameraService) { }

    ngOnInit() {
      this.camera = new Camera();

      this.cameraService.getEmployee(this.id)
        .subscribe((data: any) => {
          console.log(data)
          this.camera = data;
        }, (error: any) => console.log(error));
    }

    list() {
      this.router.navigate(['/cameras']);
    }



}
