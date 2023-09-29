import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { MenuComponent } from '../menu/menu.component';
import { PoModule } from '@po-ui/ng-components';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AlurapicComponent } from './alurapic.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';

@NgModule({
  declarations: [
    AlurapicComponent,
    PhotoComponent,
    PhotoListComponent
  ],
  exports: [
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AluraPicModule { }
