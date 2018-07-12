import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsCRUDComponent } from './components/posts-crud/posts-crud.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    GlobalsharedModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [PostsComponent, PostsCRUDComponent]
})
export class PostsModule { }
