import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loginFormModule } from 'src/app/module/form.module';
import { FormBuilder } from '@angular/forms';
import { API_POINTS } from 'src/app/module/api.module';
import { CommonService } from '../service/common.service';

@Component({
    selector: 'app-login-dialog',
    templateUrl: 'login-dialog.component.html'
})

export class LoginDialog{
  loginForm: any;
  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formbuilder: FormBuilder,
    private commonService: CommonService) {
        this.loginForm = this.formbuilder.group(loginFormModule)
    }

    submit(){
        this.commonService.post(API_POINTS.login,this.loginForm.value).subscribe(result =>{
            if(result.success){
                this.dialogRef.close();
            }
        })
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}