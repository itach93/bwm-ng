import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {

    constructor (private httpClient: HttpClient) {}

    public getRentalById(rentalId: string): Observable<any> {
       return this.httpClient.get('/api/v1/rentals/' + rentalId);
    }

    public getREntals(): Observable<any> {
        return this.httpClient.get('/api/v1/rentals');
    }


}
