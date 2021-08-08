import { Route } from "@angular/router";

export interface IRoute extends Route {
  name: string;
}

export interface IRoutes { [key: string]: IRoute };

export const ROUTES: IRoutes = {
  drumKit: {
    path: 'drum-kit',
    name: 'Drum Kit'
  },
  clock: {
    path: 'clock',
    name: 'Clock'
  }
}
