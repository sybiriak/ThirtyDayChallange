import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssVariablesComponent } from './css-variables.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CssVariablesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CssVariablesModule { }
