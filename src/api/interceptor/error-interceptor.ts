import {Injectable} from '@angular/core'
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import {NzMessageService} from 'ng-zorro-antd'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private msg: NzMessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An client-side or network error occurred:', error.error.message)
      this.msg.error('Connection Error!' + error.error.message)
      return throwError('Connection Error!' + error.error.message)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`)
      // return an observable with a user-facing error message
      this.msg.error(`Backend error: ${error.status} : ${error.error}`)
      return throwError(`Backend error: ${error.status} : ${error.error}`)
    }
  }
}
