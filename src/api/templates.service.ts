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
    // console.log(`\nRemoving ${templates.data.length} templates...`);
    //
    // templates.data.forEach(async template => {
    //   try {
    //     let templateRemove = await request.delete(`${host}/api/templates/${template.Id}`, {
    //       headers: {'Authorization': `Bearer ${res.data.jwt}`}
    //     });
    //     console.log(templateRemove.data)
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });
    // console.log(`Tempaltes removed!\n`);
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
