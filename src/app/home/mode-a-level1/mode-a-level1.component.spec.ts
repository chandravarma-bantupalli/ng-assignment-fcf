import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeALevel1Component } from './mode-a-level1.component';

describe('ModeALevel1Component', () => {
  let component: ModeALevel1Component;
  let fixture: ComponentFixture<ModeALevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeALevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeALevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
