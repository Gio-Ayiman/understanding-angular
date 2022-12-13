import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interaction-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  items = ['Giovanni', 'fidele']

  constructor() { }

  ngOnInit(): void {
  }

  addItem(event: string) {
    this.items.push(event);
  }
}
