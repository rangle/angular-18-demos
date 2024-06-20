import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {ngSkipHydration: 'true'},
})
export class HomeComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
  ){}

  get isBrowserOnly(): boolean {
     return isPlatformBrowser(this.platformId);
  }
}
