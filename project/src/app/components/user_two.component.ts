import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-two',
  template: ` <p>Username: {{ username }}</p>
    <p>Framework:{{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>`,
  standalone: true,
  styles: `button{
    padding: 5px; background-color:#a144eb;
    color:#fff;
    border:none; border-radius:5px;
    }
    button:hover{
    background-color:#c144eb;
    }`,
  imports: [FormsModule],
})
export class UserComponentTwo {
  username = 'Gabriel Mello';
  favoriteFramework = '';
  showFramework() {
    alert(this.favoriteFramework);
  }
}
