import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  template: `
    <div
      style="align-items: center; display: flex; flex-direction: column;padding-top: 50px;"
    >
      <h1>404</h1>
      <h3>Page not found!</h3>
      <h5>This is not the web page you are looking for.</h5>
      <br />
      <button mat-raised-button routerLink="">Back To Home</button>
    </div>
  `,
  styles: ``,
})
export class ErrorComponent {}
