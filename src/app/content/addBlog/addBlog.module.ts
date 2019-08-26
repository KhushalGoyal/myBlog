import { NgModule } from '@angular/core';
import { SharedModule } from '../../sharedmodule/shared.module';
import { AddBlogRoutingModule } from './addBlog-routing.module';
import { AddBlogContentsComponent } from './add-blog-contents/add-blog-contents.component';

@NgModule({
    imports: [
        SharedModule,
        AddBlogRoutingModule
    ],
    declarations: [
        AddBlogContentsComponent
    ],
    exports: []
})

export class AddBlogModule{

}