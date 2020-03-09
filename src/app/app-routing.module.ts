import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent} from '../app/message/message.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:"login",component:LoginComponent},
  {path:"home",component:MessageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
