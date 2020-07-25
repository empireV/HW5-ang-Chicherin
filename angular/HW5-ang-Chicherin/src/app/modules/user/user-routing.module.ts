import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from '../../components/users/users.component';
import {SingleUserComponent} from '../../components/single-user/single-user.component';


const routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':id', component: SingleUserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
