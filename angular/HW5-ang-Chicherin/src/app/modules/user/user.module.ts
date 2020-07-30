import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UsersComponent} from '../../components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {MyFirstPipe} from '../../my-first.pipe';


@NgModule({
  declarations: [UsersComponent, MyFirstPipe],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [MyFirstPipe]
})
export class UserModule { }
