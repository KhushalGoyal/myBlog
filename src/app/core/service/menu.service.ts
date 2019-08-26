import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenStorage } from './token.storage';
import { MatSnackBar } from '@angular/material';

@Injectable({providedIn:'root'})

export class MenuLayoutService{
    public showLogin = new BehaviorSubject(false);

    constructor(private tokenStorage: TokenStorage,
        public _snakBar : MatSnackBar){
        this.getShowMenuStatus();
    }

    getShowMenuStatus(){
       this.showLogin.next(this.tokenStorage.isAccessTokenPresent())
    }
    
    openSnackBar(message: string, action: string) {
        this._snakBar.open(message, action, {
            duration: 2000,
            horizontalPosition:'right',
            verticalPosition:'top'
        })
    }
}