import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorpageComponent} from './errorpage/errorpage.component';

const routes: Routes = [
  {path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
  {path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule'},
  {path: 'about', loadChildren: './modules/about/about.module#AboutModule'},
  {path: 'events', loadChildren: './modules/events/events.module#EventsModule'},
  {path: 'posts', loadChildren: './modules/posts/posts.module#PostsModule'},
  {path: 'postread/:id', loadChildren: './modules/postread/postread.module#PostreadModule'},
  {path: 'gallery', loadChildren: './modules/gallery/gallery.module#GalleryModule'},
  {path: 'counselling', loadChildren: './modules/counselling/counselling.module#CounsellingModule'},
  {path: 'projects', loadChildren: './modules/projects/projects.module#ProjectsModule'},
  {path: 'dash', loadChildren: './modules/dash/dash.module#DashModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'error', component: ErrorpageComponent},
  {path: '**', redirectTo: 'error', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
