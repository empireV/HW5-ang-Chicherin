import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentsComponent} from '../../components/comments/comments.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ]
})
export class CommentModule { }
