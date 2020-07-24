import { Component } from '@angular/core';
import {IAlbum} from '../../models/ialbum';
import {IToDo} from '../../models/ito-do';
import {NgForm} from '@angular/forms';
import {TodoService} from '../../services/todo.service';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW5-ang-Chicherin';
  album: IAlbum = {};
  todo: IToDo = {};

  constructor(private todoService: TodoService, private albumService: AlbumService) {
  }

  s(formElement: NgForm) {
    this.todoService.getTodo().subscribe(arrayTodo => {
      console.log(typeof arrayTodo[0].completed);
      console.log(typeof this.todo.completed);
      const boolVal = (this.todo.completed == 'true');
      console.log(typeof boolVal);
      const filter = this.todoService.filterTodo(arrayTodo, boolVal);
      console.log(filter);
    });
    this.albumService.getAlbums().subscribe(arrayAlbums => {
      const filter = this.albumService.findAlbums(arrayAlbums, formElement.controls.album.value);
      console.log(filter);
    });
  }
}
