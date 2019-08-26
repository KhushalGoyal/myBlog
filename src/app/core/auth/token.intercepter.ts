import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorage } from '../service/token.storage';


@Injectable()


export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: TokenStorage) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `${this.auth.getAccessToken()}`
      }
    });
    return next.handle(request);
  }
}