import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {  
  constructor(private client: HttpClient) {}

  public getArtists() {
    return this.client.get<Array<Artist>>("http://localhost:5036/api/artists");
  }
}