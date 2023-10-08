import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo.interface';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  //photos: Photo[] = [];
  photos: Array<Photo> = [];
  //http = new HttpClient(new HttpHandler());

  constructor(private photoService: PhotoService,
    private activatedRoute: ActivatedRoute) {

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
    const userName = this.activatedRoute.snapshot.params['userName'];

    this.photoService
    .listFromUser(userName)
    .subscribe({
      next: (photosService: Photo[]) => (console.log("console sucesso fotos " + photosService), this.photos = photosService),
      error: (error: any) => console.log("Falha ao carregar fotos")
    });
    //.subscribe(photos => this.photos = photos);

    console.log("console username " + userName);
    console.log("console total fotos " + this.photos.length)
  }

}
