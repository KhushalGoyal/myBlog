import { NgModule } from '@angular/core';
import { SharedModule } from '../sharedmodule/shared.module';
import { ContentRoutingModule } from './content-routing.module';
import { BlogPostModule } from './blogposts/blogpost.module';
import { AddBlogModule } from './addBlog/addBlog.module';

@NgModule({
    imports: [
        BlogPostModule,
        AddBlogModule,
        SharedModule,
        ContentRoutingModule
    ],
    declarations: [],
    exports: []
})

export class ContentModule{

}