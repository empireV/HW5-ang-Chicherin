import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UsersComponent} from '../../components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from '../pipes/pipes.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  exports: []
})
export class UserModule { }
