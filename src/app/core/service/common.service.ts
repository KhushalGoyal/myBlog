import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class CommonService{
    constructor(private http: HttpClient){}

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
        console.log(err)
        throw err
    }
}