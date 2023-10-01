import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders } from "@angular/core";
import { AlurapicComponent } from "./alurapic/alurapic.component";
import { PhotoListComponent } from "./alurapic/photo/photo-list/photo-list.component";
import { PhotoFormComponent } from "./alurapic/photo/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";

const APP_ROUTES: Routes = [
  /*
  não usar
  {path: '', redirectTo: 'menu', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'alurapic', component: AlurapicComponent},
  {path: 'user/flavio', component: PhotoListComponent},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent},
  */
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

