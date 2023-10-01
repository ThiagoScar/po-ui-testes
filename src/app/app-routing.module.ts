import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlurapicComponent } from './alurapic/alurapic.component';
import { PhotoListComponent } from './alurapic/photo/photo-list/photo-list.component';
import { PhotoFormComponent } from './alurapic/photo/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'alurapic', component: AlurapicComponent },
  { path: 'user/flavio', component: PhotoListComponent },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: PoPageBlockedUserComponent, data: {
    contactEmail: 'dev.po@po-ui.com',
    contactPhone: '0800 1234 000',
    urlBack: '/home' }
  },
  {
    path: 'access-denied', component: PoPageBlockedUserComponent, data: {
      contactEmail: 'dev.po@po-ui.com',
      contactPhone: '0800 1234 000',
      reason: PoPageBlockedUserReason.ExpiredPassword,
      urlBack: '/home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
