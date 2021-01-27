import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelDetailsService {

  constructor(private httpCall: Http) { }
  getDetails() {
      return this.httpCall.get('./assets/TravelDetails.json').pipe(map(res => {
        return res.json();
      }), catchError(e => throwError(e)));
  }

}
