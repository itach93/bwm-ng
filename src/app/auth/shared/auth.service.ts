import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import 'rxjs/Rx';

class DecodedToken {
    exp: number;
    username: string = '';
}

@Injectable()
export class AuthService {
    private decodedToken;

    constructor (private httpClient: HttpClient) {
        this.decodedToken = JSON.parse(localStorage.getItem('bwm_meta')) || new DecodedToken();
    }

    private saveToken(token: string): string {
        this.decodedToken = jwt.decode(token);

        localStorage.setItem('dwm_auth', token);
        localStorage.setItem('dwm_meta', JSON.stringify(this.decodedToken));

        return token;
    }

    private getExpiration() {
        return moment.unix(this.decodedToken.exp);
    }

    public register(userData: any): Observable<any> {
        return this.httpClient.post('api/v1/users/register', userData);
    }

    public login(userData: any): Observable<any> {
        return this.httpClient.post('api/v1/users/login', userData).map(
            (token: any) => this.saveToken(token));
    }

    public logout() {
        localStorage.removeItem('dwm_auth');
        localStorage.removeItem('dwm_meta');

        this.decodedToken = new DecodedToken();
    }

    public isAuthenticated(): boolean {
       return moment().isBefore(this.getExpiration());
    }

    public getAuthToken(): string {
        return localStorage.getItem('dwm_auth');
    }

    public getUsername(): string {
        return this.decodedToken.username;
    }

}

