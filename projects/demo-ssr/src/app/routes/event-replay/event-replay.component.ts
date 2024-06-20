import { AfterViewInit, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'event-replay',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    CommonModule
  ],
  templateUrl: './event-replay.component.html',
  styleUrl: './event-replay.component.css',
})
export class EventReplayComponent implements AfterViewInit {

  isHydrated = false;
  sprite$: Observable<string> = of('');
  searchTerm: string = 'bulbasaur';

  constructor(private pokemonService: PokemonService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isHydrated = true;
      this.loadComponent();
    }, 5000);  
  }

  loadComponent(): void {
    console.log('Component has been hydrated');
  }

  search() {
    if (this.isHydrated) {
      console.log("catching bulbasaur!");
      this.sprite$ = this.pokemonService.getPokemonSprite(this.searchTerm);    
    } else {
      console.log('Event ignored because component is not hydrated yet');
    }
  }
}
