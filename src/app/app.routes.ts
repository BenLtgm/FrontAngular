import { Routes } from '@angular/router';
import { AllArtistsComponent } from './all-artists/all-artists.component';
import { AllFilmsComponent } from './all-films/all-films.component';
import { EditArtistComponent } from './edit-artist/edit-artist.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { CreateFilmComponent } from './create-film/create-film.component';
import { editArtistResolver } from './resolvers/edit-artist.resolver';
import { allArtistResolver } from './resolvers/all-artist.resolver';
import { allFilmResolver } from './resolvers/all-film.resolver';
import { editFilmResolver } from './resolvers/edit-film.resolver';

export const routes: Routes = [
    { path: "artist/all", component: AllArtistsComponent, resolve: { artists: allArtistResolver } },
    { path: "artist/edit/:id", component: EditArtistComponent, resolve: { artist : editArtistResolver } },
    { path: "artist/add", component: CreateArtistComponent },
    
    { path: "film/all", component: AllFilmsComponent, resolve: { films : allFilmResolver } },
    { path: "film/edit/:id", component: EditFilmComponent, resolve: { film : editFilmResolver } },
    { path: "film/add", component: CreateFilmComponent }
];
