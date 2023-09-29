import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { AlurapicComponent } from './alurapic/alurapic.component';
import { PhotoComponent } from './alurapic/photo/photo.component';
import { AluraPicModule } from './alurapic/alurapic.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    routing,
    AluraPicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
