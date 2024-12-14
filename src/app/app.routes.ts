import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeComponent } from './products/home/home.component';

export const routes: Routes = [
    {
        path: 'Home', component: HomeComponent
    },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    {
        path: '**', redirectTo: 'Home'
    }
];
