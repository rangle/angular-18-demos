import { RedirectCommand, Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ControlFlowComponent } from './routes/control-flow/control-flow.component';
import { DemoSignalsComponent } from './routes/demo-signals/demo-signals.component';
import { FormEventsComponent } from './routes/form-events/form-events.component';
import { DefaultContentComponent } from './routes/default-content/default-content.component';
import { HomeComponent } from './routes/home/home.component';
import { DefferredLoadingComponent } from './routes/defferred-loading/defferred-loading.component';
import { inject } from '@angular/core';
import { ErrorComponent } from './routes/error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'signals', component: DemoSignalsComponent },
  { path: 'form-events', component: FormEventsComponent },
  { path: 'default-content', component: DefaultContentComponent },
  { path: 'deferred-loading', component: DefferredLoadingComponent },
  {
    path: 'redirect',
    component: HomeComponent,
    canActivate: [
      () => {
        return new RedirectCommand(inject(Router).parseUrl('/error'), {
          skipLocationChange: false,
        });
      },
    ],
  },
  { path: 'error', component: ErrorComponent },
];
