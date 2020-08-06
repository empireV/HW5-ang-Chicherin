import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyFirstPipe} from '../../pipes/my-first.pipe';
import {MySecondPipe} from '../../pipes/my-second.pipe';



@NgModule({
  declarations: [MyFirstPipe, MySecondPipe],
  imports: [
    CommonModule
  ],
  exports: [MyFirstPipe, MySecondPipe]
})
export class PipesModule { }
