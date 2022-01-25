import { Component } from '@angular/core';

@Component({
  selector: 'condition-ifelse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'condition-ifelse';
  couter = 0;
  increment(){
    this.couter = this.couter + 1;
  }
  decrement(){
    this.couter = this.couter - 1
  }
}
