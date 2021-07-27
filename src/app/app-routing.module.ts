import { ClockComponent } from './modules/clock/clock.component';
import { DrumKitComponent } from './modules/drum-kit/drum-kit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'drum-kit'
  },
  {
    path: 'drum-kit',
    component: DrumKitComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
