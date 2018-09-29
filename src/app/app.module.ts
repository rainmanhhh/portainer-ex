import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {AuthInterceptor} from '../api/interceptor/auth-interceptor';
import {NotFoundComponent} from './not-found/not-found.component'
import {ErrorInterceptor} from '../api/interceptor/error-interceptor'
import {WebStorageModule} from 'ngx-store';
import {SaveComponent} from './save/save.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NotFoundComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    WebStorageModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
