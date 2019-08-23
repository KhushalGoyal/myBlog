import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../sharedmodule/shared.module';
import { LoginDialog } from './login/login-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:[
        SharedModule,
        HttpClientModule
    ],
    declarations:[
        LoginComponent,
        LoginDialog
    ],
    exports:[
        LoginComponent,
        LoginDialog
    ]
})

export class CoreModule{

}