import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostsComponent} from '../../components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {MySecondPipe} from '../../my-second.pipe';


@NgModule({
  declarations: [PostsComponent, MySecondPipe],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [MySecondPipe]
})
export class PostModule { }
