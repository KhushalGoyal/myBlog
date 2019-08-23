import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    loadChildren: './blogposts/blogpost.module#BlogPostModule'
},{
    path:'home',
    loadChildren: './blogposts/blogpost.module#BlogPostModule'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
