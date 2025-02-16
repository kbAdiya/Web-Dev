import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

@Component({
  selector: 'app-example6',
  imports: [ChildComponent],
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  styleUrl: './example6.component.css'
})
export class Example6Component {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
