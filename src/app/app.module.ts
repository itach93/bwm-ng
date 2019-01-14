import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { RentalModule } from './rental/rental.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
   {path: '', redirectTo: '/rentals', pathMatch: 'full'}
];

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      AuthComponent
   ],
   imports: [
      BrowserModule,
      RentalModule,
      AuthModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
