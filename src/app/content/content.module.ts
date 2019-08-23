import { NgModule } from '@angular/core';
import { SharedModule } from '../sharedmodule/shared.module';
import { ContentRoutingModule } from './content-routing.module';
import { BlogPostModule } from './blogposts/blogpost.module';
@NgModule({
    imports: [
        BlogPostModule,
        SharedModule,
        ContentRoutingModule
    ],
    declarations: [],
    exports: []
})

export class ContentModule{

}