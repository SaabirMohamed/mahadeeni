import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsCRUDComponent } from './components/posts-crud/posts-crud.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';
import { AllpostsComponent } from './components/allposts/allposts.component';
import { PostsdetailComponent } from './components/postsdetail/postsdetail.component';
import { PosteditComponent } from './components/postedit/postedit.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    GlobalsharedModule
  ],
  declarations: [PostsComponent, PostsCRUDComponent, AllpostsComponent, PostsdetailComponent, PosteditComponent]
})
export class PostsModule { }
