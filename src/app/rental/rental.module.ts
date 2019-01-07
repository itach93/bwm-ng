import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';


import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { RentalService } from './shared/rental.service';
import { RentailDetailComponent } from './rentail-detail/rentail-detail.component';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';

const routes: Routes = [
    {   path: 'rentals',
        component: RentalComponent,
        children: [
            { path: '', component: RentalListComponent },
            { path: ':rentalId', component: RentailDetailComponent }
        ]
    },
 ];

@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentailDetailComponent,
        UppercasePipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule
    ],
    providers: [RentalService]
})
export class RentalModule {

}
