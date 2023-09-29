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
    }
  ]
}
