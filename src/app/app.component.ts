import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
