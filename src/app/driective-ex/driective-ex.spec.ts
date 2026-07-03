import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriectiveEx } from './driective-ex';

describe('DriectiveEx', () => {
  let component: DriectiveEx;
  let fixture: ComponentFixture<DriectiveEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriectiveEx],
    }).compileComponents();

    fixture = TestBed.createComponent(DriectiveEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
