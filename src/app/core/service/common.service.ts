import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MenuLayoutService } from './menu.service';

@Injectable({
    providedIn: 'root'
})

export class CommonService{
    constructor(private http: HttpClient,
        private menuService : MenuLayoutService){}

    get(url: string){
        return this.http.get(url).pipe(catchError(err => {
            this.handleError(err)
            return of(err)
        }))
    }
    
    post(url: string, param: object){
        return this.http.post(url, param).pipe(catchError(err => {
            this.handleError(err)
            return of(err)
        }))
    }

    handleError(err: HttpErrorResponse){
       if(err.error){
            this.menuService.openSnackBar(err.error.message,'Error')
       }
    }
}