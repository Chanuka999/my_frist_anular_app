import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-ex',
  imports: [],
  templateUrl: './subject-ex.html',
  styleUrl: './subject-ex.css',
})


export class SubjectEx implements OnInit{
  subject = new Subject<number>();

  ngOnInit() {
    this.subject.subscribe({ next: (v) => console.log(`Observer A: ${v}`) });

    this.subject.next(1);
    this.subject.next(2);

    this.subject.subscribe({ next: (v) => console.log(`Observer B: ${v}`) });
  }

}
