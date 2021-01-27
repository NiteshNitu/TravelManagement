import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelRequestService {

  constructor(private http: Http) { }

  SaveTravelRequest(travelReq: any[]) {
    return this.http.post('./assets/TravelDetails.json', travelReq);
  }
}
