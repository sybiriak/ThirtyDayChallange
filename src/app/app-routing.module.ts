import { ROUTES } from './app-routing.constants';
import { ClockComponent } from './modules/clock/clock.component';
import { DrumKitComponent } from './modules/drum-kit/drum-kit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.drumKit.path
  },
  {
    path: ROUTES.drumKit.path,
    component: DrumKitComponent
  },
  {
    path: ROUTES.clock.path,
    component: ClockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
