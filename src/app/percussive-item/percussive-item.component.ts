import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'percussive-item',
  templateUrl: './percussive-item.component.html',
  styleUrls: ['./percussive-item.component.css']
})
export class PercussiveItemComponent implements OnInit {

  @Input() instrumentName: string;

  soundActive: boolean;
  arrActives: boolean[];
  playOrStop: string;
  tempo: number;
  count: number;
  loopInterval: any;

  constructor() {
    this.arrActives =
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    this.playOrStop = 'Play';
    this.tempo = 1000;
    this.count = 0;
  }

  ngOnInit(): void {
  }

  activate(index) {
    this.arrActives[index] = !this.arrActives[index]
    console.log(this.arrActives);
  }

  playSound() {
    const audio = new Audio(`../assets/audio/${this.instrumentName}.wav`);
    let index = 0;
    this.playOrStop = 'Stop';
    this.loopInterval = setInterval(() => {
      if (this.arrActives[index] === true) {
        audio.play();
      }

      index++;
      console.log(index)

      if (index === 16) {
        index = 0;
      }
    }, this.tempo)
  }

  startLoop() {
    this.count++;
    if (this.count % 2 != 0) {
      this.playSound();
    } else {
      this.playOrStop = 'Play';
      clearInterval(this.loopInterval);
    }
  }

}
