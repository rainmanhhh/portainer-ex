import { Component, OnInit } from '@angular/core';
import {Template, TemplatesService} from '../../api/templates.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allData: Template[] = []
  query = ''

  constructor(
    private templatesService: TemplatesService
  ) { }

  ngOnInit() {
    const self = this
    this.templatesService.fetch().then(r => {
      self.allData = r
    })
  }

  list() {
    const q = this.query
    if (q) {
      return this.allData.filter(v => {
        return v.title.indexOf(q) >= 0 || v.description.indexOf(q) >= 0
      })
    } else return this.allData
  }

  async deleteItem(id: number) {
    await this.templatesService.delete(id)
    this.ngOnInit()
  }

  exportAll() {
    const w = window.open('', '_blank')
    w.document.write(JSON.stringify(this.list()))
  }
}

