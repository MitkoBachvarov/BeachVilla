import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: 'products', component: CalendarComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

