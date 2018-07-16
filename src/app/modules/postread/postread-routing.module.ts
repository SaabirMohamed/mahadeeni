import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostreadComponent} from './postread.component';

const routes: Routes = [
  {path: '', component: PostreadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostreadRoutingModule { }
