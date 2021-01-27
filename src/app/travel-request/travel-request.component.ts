import { Component, OnInit } from '@angular/core';
import { TravelRequestService } from '../travel-request.service';
import { Http, Response } from '@angular/http';
import { observable, Subject } from 'rxjs';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent implements OnInit {
  trvlDet = [];
  travellers = [];
  trvlIncrmnt = 0;
  constructor(private travelreq: TravelRequestService) { }

  ngOnInit() {
  }
  addTrvlDet() {
    this.trvlIncrmnt += 1;
    this.trvlDet.push(this.trvlIncrmnt);
  }

  deleteTrvlDet(id) {
    this.trvlDet.splice(id, 1);
  }

}
