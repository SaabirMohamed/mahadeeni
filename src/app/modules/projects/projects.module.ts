import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    GlobalsharedModule
  ],
  declarations: [ProjectsComponent, ProjectsTableComponent]
})
export class ProjectsModule { }
