import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostsComponent} from '../../components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from '../pipes/pipes.module';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  exports: []
})
export class PostModule { }
