import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8080/api/cameras';

  constructor(private http: HttpClient) { }

  getCamera(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCamera(camera: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, camera);
  }

  updateCamera(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCamera(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCamerasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
