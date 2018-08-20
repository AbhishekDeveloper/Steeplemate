import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SteepleMate } from './model';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
@Injectable()
export class HomeService {
    constructor (
        private http: HttpClient
    ) { }

    getData() {
        return this.http
            .get(environment.site.searchPeople).pipe(map(r=>r as SteepleMate[]));      
    }
}