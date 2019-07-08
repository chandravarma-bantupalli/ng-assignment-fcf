import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeBLevel1Component } from './mode-b-level1.component';

describe('ModeBLevel1Component', () => {
  let component: ModeBLevel1Component;
  let fixture: ComponentFixture<ModeBLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeBLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeBLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
