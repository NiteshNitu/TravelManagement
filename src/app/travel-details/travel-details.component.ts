import { Component, OnInit } from '@angular/core';
import { TravelDetailsService } from '../travel-details.service';
import { Http, Response } from '@angular/http';
import { observable, Subject } from 'rxjs';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  TravelDet: any;
  RescheduleDet = [];
  id: number;
  constructor(private traveldetService: TravelDetailsService) { }

  ngOnInit() {
    this.traveldetService.getDetails().subscribe(data => {
    this.TravelDet = data.Travel;
    }, error => {
      console.log(error);
    });
  }

  getRescheduleDet(travl) {
    this.RescheduleDet = travl;
  }

  cancelReq(id) {
    this.id = id;
  }

  CancelTravelRequest() { }

}
