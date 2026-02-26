import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app-component/app-component.js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab4');
}
