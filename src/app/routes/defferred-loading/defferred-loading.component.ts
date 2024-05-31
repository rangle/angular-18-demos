import { Component, inject, signal } from '@angular/core';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'app-defferred-loading',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, MatButtonModule, ProfileComponent],
  template: `
    <div>
      <h3 style="text-align: center;">Deferred Loading</h3>
      <hr />
      <button mat-raised-button (click)="fetchProfile()">Fetch Profile</button>
      <hr />
      @defer(when showProfile;) {
      <app-profile firstName="Sam" lastName="Hans" email="samhans@mail" />
      } @placeholder (minimum 750ms){
      <img
        src="https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-286x300.jpg"
      />
      } @loading (after 750ms; minimum 2s) {
      <app-spinner />
      } @error {
      <p>Error :(</p>
      }
    </div>
  `,
  styles: ``,
})
export class DefferredLoadingComponent {
  showProfile = false;
  user = signal(undefined);

  private http = inject(HttpClient);

  async fetchProfile() {
    this.showProfile = true;
    const response: any = await lastValueFrom(
      this.http.get('https://randomuser.me/api')
    );
    console.log(response);

    this.user.set(response.results[0]);
  }
}
