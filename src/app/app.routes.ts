import { Routes } from '@angular/router';
import { AllArtistsComponent } from './all-artists/all-artists.component';
import { AllFilmsComponent } from './all-films/all-films.component';
import { EditArtistComponent } from './edit-artist/edit-artist.component';
import { EditFilmComponent } from './edit-film/edit-film.component';

export const routes: Routes = [
    { path: "artist/all", component: AllArtistsComponent },
    { path: "artist/edit/:id", component: EditArtistComponent },
    { path: "film/all", component: AllFilmsComponent },
    { path: "film/edit/:id", component: EditFilmComponent }
];
