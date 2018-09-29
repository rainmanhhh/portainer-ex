import {Injectable} from '@angular/core';
import {UtilService} from './util.service'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {
  baseUrl: string

  constructor(private util: UtilService, private http: HttpClient) {
    this.baseUrl = `${util.backEnd}/api/templates`
  }

  fetch() {
    return this.http.get(this.baseUrl).toPromise() as Promise<Template[]>
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`).toPromise()
  }
}

export interface Template {
  Id: number,
  type: 1|2|3,
  title: string
  description: string
}
