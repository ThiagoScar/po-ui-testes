import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from './photo.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent {
  @Input() description='';

  @Input() url='';

  @Input() likesLabel='0';

}
/*
export class PhotoComponent implements OnInit, OnChanges {

  //srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';

  //title = 'PO-UI';
  //descricao = 'PO-UI';

  @Input() photos:Photo[] = [];
  rows: any[] = [];

  //@Input() srcImage = '';
  //@Input() descricao = '';
  //@Input() tamanho = 400;
  //@Input() likes = 0;

  srcImage = ''; //this.photos[0].url;
  descricao = ''; //this.photos[0].description;
  tamanho = 400;

  likesLabel = '0'; //this.photos[0].likes.toString();

  constructor() {

  }
  ngOnInit() {
    //this.rows = this.groupColumns(this.photos);
    /*
    this.srcImage = this.rows.url;
    this.descricao = this.rows.description;
    this.tamanho = 400;

    this.likesLabel = this.rows.likes.toString();
    * /
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['photos'].currentValue.length > 0) {
      this.rows = this.groupColumns(this.photos);
    }
    console.log(this.rows);
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index+3));
    }

    return newRows;
  }

}
*/
