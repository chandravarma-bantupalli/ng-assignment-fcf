import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeBLevel3Component } from './mode-b-level3.component';

describe('ModeBLevel3Component', () => {
  let component: ModeBLevel3Component;
  let fixture: ComponentFixture<ModeBLevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeBLevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeBLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
