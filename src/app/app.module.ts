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
    DrumKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
