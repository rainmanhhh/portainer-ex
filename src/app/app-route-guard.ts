import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'
import {LoginService} from '../api/login.service'
import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AppRouteGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.jwtToken) return true
    else {
      this.router.navigate(['login'])
      return false
    }
  }
}
