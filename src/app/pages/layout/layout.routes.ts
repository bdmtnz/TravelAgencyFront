import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { SearchHotelComponent } from './pages/search-hotel/search-hotel.component';

export const layoutRoute: Route = {
    path: 'layout',
    component: LayoutComponent,
    children: [
        {
            path: 'registerhome',
            component: HomeComponent
        },
        {
            path: 'search',
            component: SearchHotelComponent
        }
    ] 
};
