import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    DragDropModule,
    MatTooltipModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
