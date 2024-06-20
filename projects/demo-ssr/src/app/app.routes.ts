import { Routes } from '@angular/router';
import { SsrComponent } from './routes/ssr/ssr.component';
import { HomeComponent } from './routes/home/home.component';
import { I18nComponent } from './routes/i18n/i18n.component';
import { EventReplayComponent } from './routes/event-replay/event-replay.component';
import { HydrationComponent } from './routes/hydration/hydration.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ssr', component: SsrComponent },
    { path: 'i18n', component: I18nComponent },
    { path: 'event-replay', component: EventReplayComponent },
    { path: 'hydration', component: HydrationComponent },
];
