import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { SearchHotelComponent } from './pages/search-hotel/search-hotel.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ManageReservationModalComponent } from './pages/booking/components/manage-reservation-modal/manage-reservation-modal.component';
import { RoomComponent } from './pages/room/room.component';

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
        },
        {
            path: 'hoteles',
            component: HotelComponent
        },
        {
            path: 'booking',
            component: BookingComponent
        },
        {
            path: 'booking/:detail',
            component: ManageReservationModalComponent
        }
        ,
        {
            path: 'room',
            component: RoomComponent
        }
    ] 
};
