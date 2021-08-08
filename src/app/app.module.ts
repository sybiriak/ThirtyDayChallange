import { MenuModule } from './modules/menu/menu.module';
import { ClockModule } from './modules/clock/clock.module';
import { DrumKitModule } from './modules/drum-kit/drum-kit.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DrumKitModule,
    ClockModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
