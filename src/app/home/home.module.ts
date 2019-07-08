import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material';
import { MatListModule } from '@angular/material';

import { HomeComponent } from './home/home.component';
import { ScoresComponent } from './scores/scores.component';
import { ModeALevel1Component } from './mode-a-level1/mode-a-level1.component';
import { ModeALevel2Component } from './mode-a-level2/mode-a-level2.component';
import { ModeALevel3Component } from './mode-a-level3/mode-a-level3.component';
import { ModeBLevel1Component } from './mode-b-level1/mode-b-level1.component';
import { ModeBLevel2Component } from './mode-b-level2/mode-b-level2.component';
import { ModeBLevel3Component } from './mode-b-level3/mode-b-level3.component';

@NgModule({
// tslint:disable-next-line: max-line-length
  declarations: [
    HomeComponent,
    ScoresComponent,
    ModeALevel1Component,
    ModeALevel2Component,
    ModeALevel3Component,
    ModeBLevel1Component,
    ModeBLevel2Component,
    ModeBLevel3Component
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatListModule
  ],
  exports: [
    HomeComponent,
    ScoresComponent,
    ModeALevel1Component,
    ModeALevel2Component,
    ModeALevel3Component,
    ModeBLevel1Component,
    ModeBLevel2Component,
    ModeBLevel3Component
  ]
})
export class HomeModule { }
