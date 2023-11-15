import { AuthService } from './../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getAuthorizationToken()
    let req: HttpRequest<any> = request

    if(token) {
      req = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
          'Access-Control-Allow-Origin': 'http://localhost:4200/'
        }
      })
    }
    return next.handle(req).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof Error) {
      console.error('Ocorreu um erro: ', error.error.message)
    } else {
      console.error(
        `Código do erro ${error.status}, ` +
        `Erro: ${JSON.stringify(error.error)}`
      )
    }

    return throwError('Ocorreu um erro, tente novamente')
  }
}
