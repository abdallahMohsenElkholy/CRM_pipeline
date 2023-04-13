import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CutPhNumPipe } from './pipes/cut-ph-num.pipe';
import { DateFormPipe } from './pipes/date-form.pipe';
import { FailedPipe } from './pipes/failed.pipe';




@NgModule({
  declarations: [
    CutPhNumPipe,
    DateFormPipe,
    FailedPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MaterialModule,
    CutPhNumPipe,
    DateFormPipe,
    FailedPipe
  ]
})
export class SharedModule { }
