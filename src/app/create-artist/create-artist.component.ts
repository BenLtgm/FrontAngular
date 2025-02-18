import { Component } from '@angular/core';
import { FormArtistComponent } from '../form-artist/form-artist.component';
import { ArtistService } from '../api/services';
import { Artist } from '../api/models';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create-artist',
  imports: [
    FormArtistComponent
  ],
  templateUrl: './create-artist.component.html',
  styleUrl: './create-artist.component.css'
})
export class CreateArtistComponent {
  title: string = "Create Artist"
  
  constructor(private artistService: ArtistService) {}
  
  submit(artist: Artist) {
    if (artist) {
      this.artistService.apiArtistPost$Json({body: artist}).subscribe((data) => {})
    }
  }
}
