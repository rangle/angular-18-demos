import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-events',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <div>
      <h3 style="text-align: center;">Unified Form Events</h3>
      <hr />
      <form class="food-form" [formGroup]="foodForm">
        <h5>What's your favourite food?</h5>
        <mat-form-field class="food-full-width">
          <mat-label>Favorite food</mat-label>
          <input
            matInput
            name="favorite"
            placeholder="Ex. Pizza"
            formControlName="favorite"
          />
        </mat-form-field>

        <mat-form-field class="food-full-width">
          <mat-label>Leave a comment</mat-label>
          <textarea
            matInput
            name="comments"
            placeholder="Ex. It makes me feel..."
            formControlName="comments"
          ></textarea>
        </mat-form-field>
        <button mat-raised-button type="submit">Submit</button>
      </form>
    </div>
  `,
  styles: `
    .food-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
  }

  .food-full-width {
    width: 100%;
  }
`,
})
export class FormEventsComponent implements OnInit {
  foodForm = new FormGroup({
    favorite: new FormControl('Sushi', [Validators.required]),
    comments: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.foodForm.events.subscribe((event) => {
      console.log(event);
    });
  }
}
