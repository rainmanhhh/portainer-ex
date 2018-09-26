import {Injectable, Injector} from '@angular/core'
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Observable} from 'rxjs'
import {LoginService} from '../login.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private loginService: LoginService
  constructor(private injector: Injector) {
    this.loginService = injector.get(LoginService)
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.jwtToken
    const fixedReq = token ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }) : req
    return next.handle(fixedReq);
  }
}
