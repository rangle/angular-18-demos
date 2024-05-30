import { Component } from '@angular/core';

@Component({
  selector: 'app-ssr',
  standalone: true,
  imports: [],
  templateUrl: './ssr.component.html',
  styleUrl: './ssr.component.css',
  host: {ngSkipHydration: 'true'}
})
export class SsrComponent {

}
