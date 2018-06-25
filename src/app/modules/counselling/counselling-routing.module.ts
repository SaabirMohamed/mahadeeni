import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounsellingComponent } from './counselling.component';

const routes: Routes = [
  {path:'', component: CounsellingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounsellingRoutingModule { }
