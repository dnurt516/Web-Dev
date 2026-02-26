import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'comments',
  template: `
    <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  `,
})

export class Comments {}

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  template: ` 
    Username {{ username }} 
    @if (isLoggedIn) {
      <p>Welcome back, Friend</p>
    }
    
    <p>The user's name is {{ name() }}</p>

    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `
})

export class User {
  username = 'young Tech';
  isLoggedIn = true;
  name = input<string>();
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
}

@Component({
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `
})

export class Child {
  readonly addItemEvent = output<string>();

  addItem () {
    this.addItemEvent.emit('🐢');
  }
}

@Component({
  selector: 'app-tutorial',
  template: `
    Hello {{ city }}, {{ 1 + 1  }}
    <section>
      <app-user name="Daniyal" />
    </section>

    @if (isServerRunning) {
      <p>Yes, the server is running</p>
    } @else {
      <p>No, the server is not running</p>
    }

    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }

    <br>

    @for (user of users; track user.id) {
      {{ user.name }}
    }

    <div [contentEditable]="isEditable">asdasd</div>
    <br>

    <button (click)="greet()">As</button>

    <br>

    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
    <br>
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>

    <br>

    <article>
  <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
  </p>
  <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted. In fact, I think I'll say these exact same things again a few times.
  </p>
  <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
  </p>
  <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted. In fact, I think I'll say these exact same things again a few times.
  </p>
  <p>
    Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
    feature that makes defer loading content the easiest and most ergonomic it could possibly be.
    The Angular community is also filled with amazing contributors and experts that create excellent
    content. The community is welcoming and friendly, and it really is the best community out there.
  </p>
  <p>
    I can't express enough how much I enjoy working with Angular. It offers the best developer
    experience I've ever had. I love that the Angular team puts their developers first and takes
    care to make us very happy. They genuinely want Angular to be the best framework it can be, and
    they're doing such an amazing job at it, too. This statement comes from my heart and is not at
    all copied and pasted.
  </p>
</article>

    @defer (on viewport) {
      <comments />
    } @placeholder {
      <p>Future comments</p>
    } @loading (minimum 2s) {
      <p>Loading comments...</p>
    }
  `,
  styles: `
    :host {
      color: blue;
    }
  `,
  imports: [User, Child, Comments, NgOptimizedImage]
})
export class Tutorial {
  city = 'San Francisco';
  isServerRunning = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
  isEditable = true;

  greet () {
    alert("Hello, there!");
  }

  message = '';

  showSecretMessage () {  
    this.message = 'Way to go';
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
