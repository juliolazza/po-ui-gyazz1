import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { Menu3RoutingModule } from './menu3-routing.module';
import { Menu3Component } from './menu3.component';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoTemplatesModule,
    FormsModule,
    Menu3RoutingModule
  ],
  declarations: [Menu3Component],
  providers: []
})
export class Menu3Module {}
