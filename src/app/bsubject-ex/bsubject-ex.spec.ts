import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSubjectEx } from './bsubject-ex';

describe('BSubjectEx', () => {
  let component: BSubjectEx;
  let fixture: ComponentFixture<BSubjectEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BSubjectEx],
    }).compileComponents();

    fixture = TestBed.createComponent(BSubjectEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
