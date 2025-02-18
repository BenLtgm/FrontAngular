import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PermissionService } from "../permission.service";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { DeleteArtistComponent } from "../delete-artist/delete-artist.component";
import { MatDialog } from "@angular/material/dialog";
import { Artist } from "../api/models";
import { ArtistService } from "../api/services";

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
    public permission: PermissionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  delete(id: string) {
    const dialogRef = this.dialog.open(DeleteArtistComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.artistsService.apiArtistArtistIdDelete({artistId: id}).subscribe((data) => {})
    });
  }

  edit(id: string) {
    this.router.navigate(["artist/edit", id]);
  }

  ngOnInit(): void {
    this.artists = this.route.snapshot.data["artists"]
  }
}