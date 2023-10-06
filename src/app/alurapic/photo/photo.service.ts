import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo.interface";

const API = 'http://localhost:3000'

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    console.log("service - " + userName);
    console.log("service - " + API + '/'+userName+'/photos/');

    return this.http
      .get<Photo[]>(API + '/'+userName+'/photos/');

  }
}
