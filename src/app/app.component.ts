import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LetsCollab';

  instrument: string;
  buttonText: string;
  changeText: boolean;

  constructor() {
    this.buttonText = 'Play';
    this.changeText = true;
  }

  onClick() {

  }

  playOrStop() {
    (this.changeText) ? this.buttonText = 'Stop' : this.buttonText = 'Play';
    this.changeText = !this.changeText;
  }

}

