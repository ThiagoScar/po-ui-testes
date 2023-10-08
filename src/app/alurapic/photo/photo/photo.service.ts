import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo.interface';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  photoObj: Photo[] = [];

  constructor(private http: HttpClient) {}

  listFromUser(userName: string): Observable<Photo[]> {
    console.log('service - ' + userName);
    console.log('service - ' + API + '/' + userName + '/photos/');

    return this.http.get<Photo[]>(API + '/' + userName + '/photos/');

  }
}
