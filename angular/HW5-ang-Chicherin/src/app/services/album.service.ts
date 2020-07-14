import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAlbum} from '../models/ialbum';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums');
  }

  findAlbums(albArr: IAlbum[], userId: number): IAlbum[] {
    return albArr.filter(value => value.userId === userId);
  }
}
