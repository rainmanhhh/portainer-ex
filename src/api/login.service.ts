import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {UtilService} from './util.service'
import {CookieStorage} from 'ngx-store'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @CookieStorage()
  jwtToken = ''

  constructor(private http: HttpClient, private util: UtilService) {
  }

  async login(username: string, password: string) {
    this.logout()
    try {
      const res = await this.http.post(`${this.util.backEnd}/api/auth`, {
        username: username,
        password: password
      }, {
        // headers: new HttpHeaders().set(
        //   'Content-Type', 'application/x-www-form-urlencoded'
        // )
      }).toPromise() as LoginRes
      this.jwtToken = res.jwt
    } catch (err) {
      const res = err as HttpErrorResponse
      const msg = res.error ? res.error.err : err.message
      console.error('login failed:%o', err)
      return Promise.reject('login failed!' + msg)
    }
  }

  logout() {
    this.jwtToken = ''
  }
}

interface LoginRes {
  jwt?: string
}
