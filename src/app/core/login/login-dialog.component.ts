import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loginFormModule } from 'src/app/module/form.module';
import { FormBuilder } from '@angular/forms';
import { API_POINTS } from 'src/app/module/api.module';
import { CommonService } from '../service/common.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TokenStorage } from '../service/token.storage';
import { MenuLayoutService } from '../service/menu.service';

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
    private commonService: CommonService,
    private http: HttpClient,
    private tokenStorage:TokenStorage,
    private menuService: MenuLayoutService) {
        this.loginForm = this.formbuilder.group(loginFormModule)
    }

    submit(){
        const loginRes = this.http.get(API_POINTS.login,{observe : 'response', params: this.loginForm.value}).pipe(catchError(
            err=> {
              console.log('ERROR: this.auth.refreshShouldHappen(err)');
              return of(err);
            }
         ));
         loginRes.subscribe(result => {
             if(result.status == 200){
                this.tokenStorage.setAccessToken(result.body.accessToken)
                this.tokenStorage.setUserName(result.body.username)
                this.tokenStorage.setFullName(result.body.firstname+' '+result.body.lastname)
                this.tokenStorage.setUserRoles(result.body.role)
                this.tokenStorage.setRefreshToken(result.body.refreshToken)
                this.onNoClick();
             }
         })
    }
    onNoClick(): void {
        this.menuService.getShowMenuStatus();
        this.dialogRef.close();
    }
}