import { Component } from '@angular/core';
import { PatientComponent } from './patient-component/patient-component.component';
import { OnInit, Input } from '@angular/core';

import { Patient } from './models/patient'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  patient0: Patient;

  patients: Patient[]
  betterPatients: Patient[]

  constructor(){

  }

  ngOnInit() {
     this.patient0 = new Patient('Jim', 'Williams', 0)
  }

  //Get patients from service

  //Receive the all better event
}
