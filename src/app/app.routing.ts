import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]

    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
