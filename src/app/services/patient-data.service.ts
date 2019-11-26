import { Injectable } from '@angular/core';
import { Observable,  BehaviorSubject, of } from 'rxjs';

import { Patient } from '../models/patient'

@Injectable()
export class PatientDataService {

  constructor() { }

   patients = [
    { firstName: 'Bob', lastName: 'Wilson' },
    { firstName: 'Sue', lastName: 'Smith' },
    { firstName: 'Jesse', lastName: 'Rickson' },
    { firstName: 'Fred', lastName: 'Jones' }
  ];

  getPatients(): Observable<Patient[]>{
    return new BehaviorSubject<Patient[]>(this.patients);
  }
}