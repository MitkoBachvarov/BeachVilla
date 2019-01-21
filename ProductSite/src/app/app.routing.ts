import { AboutPageComponent } from './about-page/about-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: 'calendar', component: CalendarComponent },
    { path: 'about', component: AboutPageComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

