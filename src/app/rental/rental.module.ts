import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import { Daterangepicker } from 'ng2-daterangepicker';


import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { RentalService } from './shared/rental.service';
import { RentailDetailComponent } from './rentail-detail/rentail-detail.component';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';
import { MapModule } from '../common/map/map.module';
import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalDetailBookingComponent } from './rentail-detail/rental-detail-booking/rental-detail-booking.component';

const routes: Routes = [
    {   path: 'rentals',
        component: RentalComponent,
        children: [
            { path: '', component: RentalListComponent },
            { path: ':rentalId', component: RentailDetailComponent, canActivate: [AuthGuard] }
        ]
    },
 ];

@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentailDetailComponent,
        UppercasePipe,
        RentalDetailBookingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule,
        MapModule,
        Daterangepicker
    ],
    providers: [
        RentalService,
    ]
})
export class RentalModule {

}
