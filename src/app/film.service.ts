
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private client: HttpClient) {}

  public getFilms() {
    return this.client.get<Array<Film>>("http://localhost:5036/api/films");
  }
}