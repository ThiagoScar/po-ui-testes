import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo.interface';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  //http = new HttpClient(new HttpHandler());

  constructor(private photoService: PhotoService) {

    /*
    http
      .get<Photo[]>('http://localhost:3000/flavio/photos/')
      .subscribe((photos => {
        this.photos = photos,
          (err: any) => console.log(err)
      }));
    */
    //console.log(this.photos);
  }
  ngOnInit(): void {
    this.photoService
    .listFromUser("flavio")
    .subscribe(photos => this.photos = photos);
  }

}
