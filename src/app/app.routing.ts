import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders } from "@angular/core";
import { AlurapicComponent } from "./alurapic/alurapic.component";

const APP_ROUTES: Routes = [

  {path: '', redirectTo: 'menu', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'alurapic', component: AlurapicComponent},
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

