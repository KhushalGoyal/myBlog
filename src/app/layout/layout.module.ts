import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../sharedmodule/shared.module';
import { CoreModule } from '../core/core.module';
import { LoginDialog } from '../core/login/login-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        SharedModule,
        CoreModule,
        CommonModule
    ],
    declarations:[
        HeaderComponent
    ],
    providers:[],
    exports:[
        HeaderComponent
    ],
    entryComponents:[
        LoginDialog
    ]
})

export class LayoutModule{
    constructor(){

    }
}