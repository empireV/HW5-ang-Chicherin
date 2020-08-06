import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output()
  emit: EventEmitter<number> = new EventEmitter<number>();
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  minus(): void {
    console.log(this.count);
    this.count = this.count - 1;
    this.emit.emit(this.count);
  }

  plus() {
    this.count = this.count + 1;
    this.emit.emit(this.count);
  }

  minus10() {
    this.count = this.count - 10;
    this.emit.emit(this.count);
  }

  plus10() {
    this.count = this.count + 10;
    this.emit.emit(this.count);
  }

  minus100() {
    this.count = this.count - 100;
    this.emit.emit(this.count);
  }

  plus100() {
    this.count = this.count + 100;
    this.emit.emit(this.count);
  }

  zero() {
    this.count = 0
    this.emit.emit(this.count);
  }
}
