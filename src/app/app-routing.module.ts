import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component'
import {MainComponent} from './main/main.component'
import {HashLocationStrategy, LocationStrategy} from '@angular/common'
import {AppRouteGuard} from './app-route-guard'
import {NotFoundComponent} from './not-found/not-found.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent, canActivate: [AppRouteGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppRoutingModule {
}
