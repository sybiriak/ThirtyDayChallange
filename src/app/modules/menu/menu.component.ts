import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IRoute, ROUTES } from 'src/app/app-routing.constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  menuItems: IRoute[] = [];
  isOpened: boolean = false;

  constructor(
    private router: Router
  ) {
    this.setMenuItems();
  }

  ngOnInit(): void {
  }

  goTo(path: string | undefined): void {
    if (path) {
      this.router.navigateByUrl(path);
      this.isOpened = false;
    }
  }

  private setMenuItems(): void {
    this.menuItems = [];

    for (const key in ROUTES) {
      if (Object.prototype.hasOwnProperty.call(ROUTES, key)) {
        const element = ROUTES[key];
        this.menuItems.push(element);
      }
    }
  }
}
