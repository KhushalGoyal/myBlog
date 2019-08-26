import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    loadChildren: './blogposts/blogpost.module#BlogPostModule'
    },{
    path:'home',
    loadChildren: './blogposts/blogpost.module#BlogPostModule'
  },{
    path:'addBlog',
    loadChildren: './addBlog/addBlog.module#AddBlogModule'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
