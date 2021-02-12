import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { OneShotSoundComponent } from './one-shot-sound/one-shot-sound.component';
import { PercussiveItemComponent } from './percussive-item/percussive-item.component';

@NgModule({
  declarations: [
    AppComponent,
    OneShotSoundComponent,
    PercussiveItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
