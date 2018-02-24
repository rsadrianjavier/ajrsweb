import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes

import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	
	{path: 'home', component: HomeComponent},
	{path: 'contact', component: ContactComponent},
	{path: '**', component: Error404Component},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);