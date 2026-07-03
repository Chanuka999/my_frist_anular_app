import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-driective-ex',
  imports: [NgClass,FormsModule],
  templateUrl: './driective-ex.html',
  styleUrl: './driective-ex.css',
})
export class DriectiveEx {
 divClassName:string = "bg-success";

 addDiv1Class(className:string){
    this.divClassName = className;
 }
 ischeckedActive =false; 

 num1 = " ";

 checkCharLength(){
  
 }
}
