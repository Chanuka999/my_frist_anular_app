import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEx } from './subject-ex';

describe('SubjectEx', () => {
  let component: SubjectEx;
  let fixture: ComponentFixture<SubjectEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectEx],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
