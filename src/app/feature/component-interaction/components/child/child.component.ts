import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()
  name = '';
  item = '';

  @Output()
  voter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  send() {
    this.voter.emit(this.item);
  }

}
