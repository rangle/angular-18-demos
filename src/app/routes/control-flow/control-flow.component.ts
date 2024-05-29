import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [MatChipsModule, MatListModule, MatDividerModule, CommonModule],
  template: `
    <div>
      <h3 style="text-align: center;">New Control Flow</h3>
      <hr />
      <section>
        @if (user.role === 'admin') {
        <pre>{{ user | json }}</pre>
        } @else if (user.loggedIn) {
        <pre>{{ user | json }}</pre>
        } @else {
        <pre>{{ user | json }}</pre>
        }
      </section>
      <mat-divider></mat-divider>
      <section>
        <mat-list role="list">
          <div mat-subheader>Users</div>
          @for (user of users; track user) {
          <mat-list-item role="listitem">{{ user.name }}</mat-list-item>
          } @empty {
          <mat-list-item role="listitem">No Users Found</mat-list-item>
          }
        </mat-list>
      </section>
      <mat-divider></mat-divider>
      <section>
        <h4>Total Rewards:</h4>
        @switch (rewardsLevel) { @case ("gold") {
        <p>Coin Value +20</p>
        } @case ("silver") {
        <p>Coin Value +10</p>
        } @case ("bronze") {
        <p>Coin Value +5</p>
        } @default {
        <p>Keep Playing!!</p>
        } }
      </section>
    </div>
  `,
  styles: ``,
})
export class ControlFlowComponent {
  rewardsLevel = 'gold';
  user = {
    loggedIn: true,
    role: 'admin',
  };

  users: { name: string }[] = [
    {
      name: 'Sam Hans',
    },
  ];
}
