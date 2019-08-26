import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn : 'root'})

export class TokenStorage{

    public getAccessToken(): string {
        const token: string = <string>localStorage.getItem('accessToken');
        return token;
      }
      /**
       * Get refresh token
       * @returns {Observable<string>}
       */
      public getRefreshToken(): Observable<string> {
        const token: string = <string>localStorage.getItem('refreshToken');
        return of(token);
      }
  
      /**
       * Get user roles as Observable<Array>
       * @returns {Observable<Array>}
       */
      public getUserRoles(): Observable<any> {
        const roles: any = localStorage.getItem('userRoles');
        return of(JSON.parse(roles));
      }
  
      public getUserName(): string {
        const name: string = localStorage.getItem('username');
        return name;
      }

      public setAccessToken(token: string): TokenStorage {
        localStorage.setItem('accessToken', 'Bearer '+token);
        return this;
      }
  
      /**
       * Set refresh token
       * @returns {TokenStorage}
       */
      public setRefreshToken(token: string): TokenStorage {
        localStorage.setItem('refreshToken', token);
        return this;
      }
  
      /**
       * Set user roles
       * @param roles
       * @returns {TokenStorage}
       */
      public setUserRoles(roles: any): any {
        //if (roles != null) {
        localStorage.setItem('userRoles',JSON.stringify(roles) );
        //}
        return this;
      }
  
      public setUserName(username):any{
        localStorage.setItem('username', username);
        // this.cookie.set('userName', username)
        return this;
      }
  
      public setFullName(fullName):any{
        localStorage.setItem('fullname',fullName);
        return this;
      }
  
      public isAccessTokenPresent():boolean{
        return localStorage.getItem('accessToken') && localStorage.getItem('accessToken').slice(0,6) === 'Bearer' ? true : false
      }
      /**
       * Remove tokens
       */
      public clear() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userRoles');
        localStorage.removeItem('username');
        localStorage.removeItem('fullname');
      }
}