import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeALevel3Component } from './mode-a-level3.component';

describe('ModeALevel3Component', () => {
  let component: ModeALevel3Component;
  let fixture: ComponentFixture<ModeALevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeALevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeALevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
