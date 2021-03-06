import { FlexPanelsComponent } from './modules/flex-panels/flex-panels.component';
import { ROUTES } from './app-routing.constants';
import { ClockComponent } from './modules/clock/clock.component';
import { DrumKitComponent } from './modules/drum-kit/drum-kit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssVariablesComponent } from './modules/css-variables/css-variables.component';
import { ArrayCardioComponent } from './modules/array-cardio/array-cardio.component';

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
  },
  {
    path: ROUTES.cssVariables.path,
    component: CssVariablesComponent
  },
  {
    path: ROUTES.arrayCardio.path,
    component: ArrayCardioComponent
  },
  {
    path: ROUTES.flexPanels.path,
    component: FlexPanelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
