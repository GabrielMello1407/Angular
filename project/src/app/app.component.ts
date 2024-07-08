import { Component, inject, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildComponent } from './child.component';
import { CommentsComponent } from './components/comments.component';
import { UserComponent } from './components/user.component';
import { UserComponentTwo } from './components/user_two.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CarService } from './services/car.service';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ChildComponent,
    CommentsComponent,
    RouterOutlet,
    RouterLink,
    UserComponent,
    UserComponentTwo,
    ReactiveFormsModule,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    ReversePipe,
  ],
  template: `
    <h1>Tutorial Angular</h1>
    <h2>*Template call</h2>
    <p>Hello {{ city }}, {{ 2 + 2 }}</p>
    <h2>*Conditional</h2>
    @if(isServerRunning){ <span>Yes, the server is running</span> } @else{
    <span>No, the server is not running</span>}
    <h2>*Repeat system using for</h2>
    @for (user of users; track user.id) {
    <p>{{ user.name }}</p>
    }
    <h2>*Property Binding</h2>
    <div [contentEditable]="isEditable"></div>
    <h2>*Event handling</h2>
    <button (click)="greet()">Click</button>
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal👀
      {{ message }}
    </section>
    <h2>*Component Communication with Input(Properties)</h2>
    <p>The user's name is {{ name }}</p>
    <h2>*Component Communication with Output(EventEmitter)(useState)</h2>
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
    <h2>*Deferrable Views</h2>
    <div>
      <h3>How I feel about Angular</h3>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
      </article>
      @defer (on viewport) {
      <comments />
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
    <p>--------------------------------------</p>
    <h2>*Routing Overview</h2>
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
    <h2>*Use RouterLink for Navigation</h2>
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
    <h2>*Forms Overview</h2>
    <app-user />
    <h2>*Getting form control value</h2>
    <app-user-two />
    <h2>*Reactive Forms</h2>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label>
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
    <h4>Profile Form</h4>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
    <h2>*Validating forms</h2>
    <form [formGroup]="profileFormTwo">
      <label>
        Name:
        <input type="text" formControlName="name" name="name" />
      </label>
      <label>
        Email:
        <input type="email" formControlName="email" name="email" />
      </label>
      <button type="submit" [disabled]="!profileFormTwo.valid">Submit</button>
    </form>
    <h2>*Injectable Service DI(Dependency Injection)</h2>

    <h2>*Inject-based dependency injection</h2>
    <p>Car Listing: {{ display }}</p>
    <h2>*Constructor-based dependency injection</h2>
    <p>Car Listing: {{ displayTwo }}</p>
    <h2>*Pipes</h2>
    <p>{{ loudMessage | uppercase }}</p>
    <p>{{ username | lowercase }}</p>
    <h2>*Formatting data with pipes</h2>
    <ul>
      <li>{{ date | date : 'medium' }}</li>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
    <h2>*Create a custom Pipe(Reverse Pipe)</h2>
    Reverse Machine: {{ word | reverse }}
  `,
  styles: `
  :host{
    color: #a144eb;
  }
    h1{
    color:#d144eb
    }
    div{
    width:500px;
    }
    section{
    background-color:#a144eb;
    color:#fff;
    margin-top:20px;
    padding:10px;
    width:500px;
    border-radius:5px;
    }
    section:hover{
    background-color:#b144eb;
    }
    button{
    padding: 5px; background-color:#a144eb;
    color:#fff;
    border:none; border-radius:5px;
    }
    button:hover{
    background-color:#c144eb;
    }
  `,
})
export class AppComponent {
  // Template call
  title = 'project';
  city = 'Jacarezinho';
  // Conditional
  isServerRunning = true;
  // Repeat system using for
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  isEditable = true;
  // *Event handling
  greet() {
    console.log('You clicked!');
  }
  message = '';
  onMouseOver() {
    this.message = 'Lets go up 🚀';
  }
  // Component Communication with Input(Properties)
  @Input() name = 'Gabriel';

  // Component Communication with Output
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
  // Reactive Forms
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
  // Validating forms
  profileFormTwo = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Injectable Service DI(Dependency Injection)
  // carService = inject(CarService);
  // You need put push this in template <p>{{ carService.getCars() }}</p>, and remove the commentary from carService

  // Inject-based Dependency Injection
  display = '';
  // Constructor-based dependency injection
  displayTwo = '';
  // Constructor for Inject-based Dependency Injection and Constructor-based dependency injection
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
    this.displayTwo = this.carService.getCars().join(' ⭐️ ');
  }
  // Pipes
  loudMessage = 'we think you are doing great!';
  username = 'yOunGTECh';
  // Formatting data with Pipes
  num = 103.1234;
  date = new Date(2023, 3, 2);
  cost = 4560.34;

  // Create a custom Pipe(Reverse Pipe)
  word = 'You are a champion';
}
