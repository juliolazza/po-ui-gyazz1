import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { Menu1RoutingModule } from './menu1-routing.module';
import { Menu1Component } from './menu1.component';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoTemplatesModule,
    FormsModule,
    Menu1RoutingModule
  ],
  declarations: [Menu1Component],
  providers: []
})
export class Menu1Module {}
