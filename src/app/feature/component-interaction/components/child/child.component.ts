import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'interaction-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()
  name = '';

  @Output()
  voter = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  vote(decision: boolean) {
    this.voter.emit(decision);
  }

}
