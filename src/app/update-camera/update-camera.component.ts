import { CameraService } from './../camera.service';
import { Camera } from './../camera';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-camera',
  templateUrl: './update-camera.component.html',
  styleUrls: ['./update-camera.component.css']
})
export class UpdateCameraComponent implements OnInit {

  id: string | any;
  camera: Camera | any;

  constructor(private route: ActivatedRoute,private router: Router,
              private cameraService: CameraService) { }

    ngOnInit() {
      this.camera = new Camera();

      this.id = this.route.snapshot.params['id'];

      this.cameraService.getEmployee(this.id)
        .subscribe((data: any) => {
          console.log(data)
          this.camera = data;
        }, (error: any) => console.log(error))
    }

    updateCamera() {
      this.cameraService.updateCamera(this.id, this.camera)
      .subscribe(data => console.log(data), error => console.log(error));
      this.camera = new Camera();
      this.gotoList();
    }

    onSubmit() {
      this.updateCamera();
    }

    gotoList() {
      this.router.navigate(['/cameras']);
    }

}
