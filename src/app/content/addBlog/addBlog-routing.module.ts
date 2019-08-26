import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogContentsComponent } from './add-blog-contents/add-blog-contents.component';

const routes: Routes = [{
    path:'',
    component: AddBlogContentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBlogRoutingModule { }
