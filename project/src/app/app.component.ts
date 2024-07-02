import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <h1>Tutorial Angular</h1>
    <h2>Template call</h2>
    <p>Hello {{ city }}, {{ 2 + 2 }}</p>
    <h2>Conditional</h2>
    @if(isServerRunning){ <span>Yes, the server is running</span> } @else{
    <span>No, the server is not running</span>}
    <h2>Repeat system using for</h2>
    @for (user of users; track user.id) {
    <p>{{ user.name }}</p>
    }
    <h2>Property Binding</h2>
    <div [contentEditable]="isEditable"></div>
    <h2>Event handling</h2>
    <button (click)="greet()">Click</button>
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal👀
      {{ message }}
    </section>
    <h2>Component Communication with Input(Properties)</h2>
    <p>The user's name is {{ name }}</p>
    <h2>Component Communication with Output(EventEmitter)(useState)</h2>
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  styles: `
  :host{
    color: #a144eb;
  }
    h1{
    color:#d144eb
    }
    div{
    border:1px solid black;
    width:200px;
    }
    section{
    background-color:#a144eb;
    color:#fff;
    margin-top:20px;
    padding:10px;
    }
    section:hover{
    background-color:#b144eb;
    }
  `,
})
export class AppComponent {
  title = 'project';
  city = 'Jacarezinho';
  isServerRunning = true;
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  isEditable = true;
  greet() {
    console.log('You clicked!');
  }
  message = '';
  onMouseOver() {
    this.message = 'Lets go up 🚀';
  }
  @Input() name = 'Gabriel';

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
