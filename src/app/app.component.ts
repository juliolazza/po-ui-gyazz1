import { PoMenuItem, PoNavbarIconAction } from '@po-ui/ng-components';
import { Component, OnInit, VERSION } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menus: Array<PoMenuItem>;
  menus = [
    {
      icon: 'po-icon po-icon-money',
      label: 'Forecast',
      shortLabel: 'Forecast',
      link: '/ap_orc0001',
      subItems: [
        {
          label: 'REGIONAL - Insumos CRM',
          shortLabel: 'REGIONAL - Insumos CRM',
          link: '/ap_orc0001',
        },
      ],
    },
  ];
}
