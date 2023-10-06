import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  pCollapsed = false
  pFilter = true
  pMenus: Array<PoMenuItem> = [
    {
      label: 'Home',
      shortLabel: 'Home',
      link: '/home'
    },
    {
      label: 'AluraPic',
      shortLabel: 'AluraPic',
      link: '/alurapic'
    },
    {
      label: 'AluraPic - Flavio',
      shortLabel: 'AluraPic - Flavio',
      link: '/alurapic/user/flavio'
    },
    {
      label: 'AluraPic - Almeida',
      shortLabel: 'AluraPic - Almeida',
      link: '/alurapic/user/almeida'
    }
    ,
    {
      label: 'AluraPic - Erro',
      shortLabel: 'AluraPic - Erro',
      link: '/alurapic/erro'
    }
  ]
}
