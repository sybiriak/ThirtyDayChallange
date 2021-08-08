import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ClickOutsideDirective } from 'src/app/shared/directives/click-outside.directive';



@NgModule({
  declarations: [
    MenuComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
