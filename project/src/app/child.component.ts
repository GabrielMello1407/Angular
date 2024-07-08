import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; background-color:#a144eb; color:#fff;border:none; border-radius:5px;
  .btn:hover{
    background-color:#c144eb;
    }
  }`,
  template: ` <button (click)="addItem()">Add Item</button>`,
  standalone: true,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
