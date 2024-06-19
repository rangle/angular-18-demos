import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonSprite(name: string): Observable<string> {
    name=name.toLowerCase();
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
      map(response => response.sprites.front_default)
    );
  }
}