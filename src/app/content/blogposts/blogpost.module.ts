import { NgModule } from '@angular/core';
import { BlogPostRoutingModule } from './blogpost-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { SharedModule } from 'src/app/sharedmodule/shared.module';

@NgModule({
    imports:[
        BlogPostRoutingModule,
        SharedModule
    ],
    declarations: [
        BlogListComponent,
        BlogViewComponent
    ]
})

export class BlogPostModule{
    
}