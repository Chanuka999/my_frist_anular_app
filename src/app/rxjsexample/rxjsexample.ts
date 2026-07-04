import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map,of } from 'rxjs';
import { SubjectEx } from '../subject-ex/subject-ex';

@Component({
  selector: 'app-rxjsexample',
  imports: [CommonModule,SubjectEx],
  templateUrl: './rxjsexample.html',
  styleUrl: './rxjsexample.css',
})
export class RXJSExample implements OnInit{
  users = [
    {id:1,name:"chanuka",isActive:true},
    {id:2,name:"Randitha",isActive:true},
    {id:3,name:"kamal",isActive:true},
  ];

  // user$ = new BehaviorSubject<{id:string;name:string} | null>(null);

  // users$ = of(this.users);
  // usernames$ = this.users$.pipe(map((users) => users.map((user)=>user.name)));
  // filteredUsers$ = this.users$.pipe(
  //   filter((users)=>users.every((user)=>user.isActive))
  // )

  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.user$.next({id:'1',name:'john'});
    // },2000);
    // this.user$.subscribe((user)=>{
    //   console.log('user',user);
      
    // })
    // this.users$.subscribe((users)=>{
    //   console.log('users',users);
      
    // })
  }
}
