import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeBLevel2Component } from './mode-b-level2.component';

describe('ModeBLevel2Component', () => {
  let component: ModeBLevel2Component;
  let fixture: ComponentFixture<ModeBLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeBLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeBLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
