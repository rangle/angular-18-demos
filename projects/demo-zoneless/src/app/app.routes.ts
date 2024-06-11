import { Routes } from '@angular/router';
import { CounterComponent } from './routes/counter/counter.component';
import { UsersPropertyComponent } from './routes/users-property/users-property.component';
import { UsersAsyncComponent } from './routes/users-async/users-async.component';
import { UsersSignalComponent } from './routes/users-signal/users-signal.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'counter',
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'users-property',
    component: UsersPropertyComponent,
  },
  {
    path: 'users-async',
    component: UsersAsyncComponent,
  },
  {
    path: 'users-signal',
    component: UsersSignalComponent,
  },
];
