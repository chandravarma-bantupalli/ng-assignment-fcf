import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeALevel2Component } from './mode-a-level2.component';

describe('ModeALevel2Component', () => {
  let component: ModeALevel2Component;
  let fixture: ComponentFixture<ModeALevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeALevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeALevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
