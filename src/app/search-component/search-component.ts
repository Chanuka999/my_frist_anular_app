import { Component, ErrorHandler, Injectable } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, switchMap, takeUntil } from 'rxjs';
import { Data } from '../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-component',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
})

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any) {
   
    console.error('Global Error Caught:', error);
  }
}
export class SearchComponent {
  searchControl = new FormControl('');
  results: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private dataService: Data) {}

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
    
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap(query => this.dataService.search(query || '')),
      
    
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data) => this.results = data,
      error: (err) => console.error('Error fetching data:', err)
    });
  }

  ngOnDestroy() {
   
    this.destroy$.next();
    this.destroy$.complete();
  }

 
}
