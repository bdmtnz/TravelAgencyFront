import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/layout/pages/home/home.component';
import { layoutRoute } from './pages/layout/layout.routes';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    // {
    //     path: 'layout',
    //     component: LayoutComponent,
    //     children: [
    //         {
    //             path: 'home',
    //             component: HomeComponent
    //         }
    //     ] 
    // }
    {
        path: '',
        component: LandingComponent
    },
    {
        ...layoutRoute
    }
];
