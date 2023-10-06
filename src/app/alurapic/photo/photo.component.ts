import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  //srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';

  //title = 'PO-UI';
  //descricao = 'PO-UI';

  @Input() srcImage = '';
  @Input() descricao = '';
  @Input() tamanho = 400;
  @Input() likes = 0;

  likesLabel = this.likes.toString();

}
