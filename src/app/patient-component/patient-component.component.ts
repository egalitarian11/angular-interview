import { Component, OnInit, Input } from '@angular/core';
import { PatientDataService } from '../services/patient-data.service'
import { Patient } from '../models/patient'

@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: ['./patient-component.component.css']
})
export class PatientComponent implements OnInit {
  @Input() patient: Patient


  constructor() { 
  }

  ngOnInit() {
  }

  //Emit "all better" event

  

}