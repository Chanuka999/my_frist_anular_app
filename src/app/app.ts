import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Navbar } from './navbar/navbar';
import { Grid } from './grid/grid';
import { FormsModule } from '@angular/forms';
import { PipeEx } from './pipe-ex/pipe-ex';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,Navbar,Grid,FormsModule,PipeEx],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_frist_anular_app');

  imageUrl:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr58ckIdkHQP1h9yPz3ayMIrAAztkvkkHyJqLfg3vHhw&s";
  areaLabel:string = "This is a area label";
  colSpan = 2;
  isDisabled:boolean = false;
  color:string = "red";
  backgroundColor:string = "green";
  isActive:boolean = false;
  
  count = 0;

  incrementCount() {
    this.count++;
  }

  username = "chanuka";
}
