import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Navbar } from './navbar/navbar';
import { Grid } from './grid/grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,Navbar,Grid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_frist_anular_app');
}
