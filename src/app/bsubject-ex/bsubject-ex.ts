import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bsubject-ex',
  imports: [],
  templateUrl: './bsubject-ex.html',
  styleUrl: './bsubject-ex.css',
})
export class BSubjectEx implements OnInit{
   bSubject = new BehaviorSubject<number>(0);

  ngOnInit(){
     this.bSubject.subscribe({ next: (v) => console.log(`Observer A: ${v}`) });


      this.bSubject.next(1); 
      this.bSubject.next(2); 

      this.bSubject.subscribe({ next: (v) => console.log(`Observer B: ${v}`) });


      this.bSubject.next(3);
  }
}
