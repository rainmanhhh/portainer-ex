import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../api/login.service'
import {NzMessageService} from 'ng-zorro-antd'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''

  constructor(
    private loginService: LoginService,
    private msg: NzMessageService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  async submit() {
    try {
      await this.loginService.login(this.username, this.password)
      await this.router.navigate(['main'])
    } catch (e) {
      console.error('e: %o', e)
      this.msg.error(e.toString())
    }
  }
}
