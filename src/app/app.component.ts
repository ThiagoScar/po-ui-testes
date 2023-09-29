import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home' },
    { label: 'AluraPic', action: this.onClick.bind(this) }
  ];
  */

  private onClick() {
    alert('Clicked in menu item')
  }

}
