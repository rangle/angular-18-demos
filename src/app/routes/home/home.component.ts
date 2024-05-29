import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h3 style="text-align: center;">Home</h3>
      <hr />
      <h5>Angular 18 demos application.</h5>
      <h5>Click on the links to view specific demo.</h5>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
