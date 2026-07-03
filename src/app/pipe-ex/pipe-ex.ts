import { Component } from '@angular/core';
import { UpperCasePipe,LowerCasePipe,DecimalPipe,SlicePipe,JsonPipe,DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe,LowerCasePipe,DecimalPipe,SlicePipe,JsonPipe,DatePipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
})
export class PipeEx {
  studentname:string = "chanuka";
  studentAddress:string = "no 234 COLOMBO,piliyandala"
  productPrice:number = 1200.1234;
  roleNoList = [10,11,12,13,14,15];
  studentObj = {
    name:"chanuka",
    address:"laxapana",
    university:"Eastern university"
  }
  currentDate:Date = new Date();
}
