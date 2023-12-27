import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/layout/pages/home/home.component';
import { layoutRoute } from './pages/layout/layout.routes';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
        path: '404',
        component: NotFoundComponent
    },
    {
        ...layoutRoute
    }
];
