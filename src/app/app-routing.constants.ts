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
  },
  cssVariables: {
    path: 'css-variables',
    name: 'Css Variables'
  },
  arrayCardio: {
    path: 'array-cardio',
    name: 'Array Cardio'
  },
  flexPanels: {
    path: 'flex-panels',
    name: 'Flex Panels'
  }
}
