import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTileComponent } from './play-tile.component';

describe('PlayTileComponent', () => {
  let component: PlayTileComponent;
  let fixture: ComponentFixture<PlayTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
