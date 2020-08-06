import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW7-ang-Chicherin';
  count = 0;

  constructor() {
  }

  catch($event: number) {
    this.count = $event;
  }
}
