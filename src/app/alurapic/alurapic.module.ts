import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PoModule } from '@po-ui/ng-components';

import { PhotoComponent } from './photo/photo.component';
import { MenuComponent } from '../menu/menu.component';
import { AppComponent } from '../app.component';
import { AlurapicComponent } from './alurapic.component';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';
import { PhotoFormComponent } from './photo/photo-form/photo-form.component';

@NgModule({
  declarations: [
    AlurapicComponent,
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent
  ],
  exports: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AluraPicModule { }
