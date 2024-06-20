import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [
    PokemonService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'demo-ssr';
}