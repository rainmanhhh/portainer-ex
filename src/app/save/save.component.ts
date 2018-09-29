import {Component, OnInit} from '@angular/core';
import {Base64} from 'js-base64';
import {SaveStore} from './save-store'
import {DomSanitizer, SafeUrl} from '@angular/platform-browser'
import {Router} from '@angular/router'

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  data: string = null
  encodeData: SafeUrl = null

  constructor(
    private saveStore: SaveStore,
    private sanitizer: DomSanitizer,
    private router: Router) {
  }

  ngOnInit() {
    const d = this.data = this.saveStore.data
    this.encodeData = d ? this.sanitizer.bypassSecurityTrustUrl(
      'data:application/octet-stream;charset=utf8;base64,' + Base64.encode(d)
    ) : null
  }

  back() {
    this.router.navigate([''])
  }
}
