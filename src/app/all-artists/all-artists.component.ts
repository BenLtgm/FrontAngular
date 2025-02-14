import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Artist } from "../artist";
import { AuthService } from "@auth0/auth0-angular";
import { ArtistService } from "../artist.service";
import { PermissionService } from "../permission.service";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { DeleteArtistComponent } from "../delete-artist/delete-artist.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-all-artists',
  imports: [
    MatListModule,
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './all-artists.component.html',
  styleUrl: './all-artists.component.css'
})
export class AllArtistsComponent implements OnInit {
  artists: Array<Artist> = []
  readonly dialog = inject(MatDialog);

  constructor(
    private artistsService: ArtistService,
    private auth: AuthService,
    public permission: PermissionService,
    //private route: ActivatedRoute,
    private router: Router
  ) {}
  
  delete() {
    const dialogRef = this.dialog.open(DeleteArtistComponent, {
      //data: {name: this.name(), animal: this.animal()},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  edit() {
    this.router.navigate(["artist/edit", 10]);
  }

  ngOnInit(): void {
    this.getArtists()
  }

  private getArtists() {
    this.artistsService.getArtists().subscribe((data) => {
      console.log(data)
      this.artists = data
    }, (error) => {
      console.error(error)
    })
  }
}