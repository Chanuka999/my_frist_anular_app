import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RXJSExample } from './rxjsexample';

describe('RXJSExample', () => {
  let component: RXJSExample;
  let fixture: ComponentFixture<RXJSExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RXJSExample],
    }).compileComponents();

    fixture = TestBed.createComponent(RXJSExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
