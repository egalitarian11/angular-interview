import { Injectable } from '@angular/core';
import { Observable,  BehaviorSubject, of } from 'rxjs';

import { Patient } from '../models/patient'

@Injectable()
export class PatientDataService {

  constructor() { }

   patients = [
    { firstName: 'Bob', lastName: 'Wilson', id: 1 },
    { firstName: 'Sue', lastName: 'Smith', id: 2  },
    { firstName: 'Jesse', lastName: 'Rickson', id: 3  },
    { firstName: 'Fred', lastName: 'Jones', id: 4  }
  ];

  getPatients(): Observable<Patient[]>{
    return new BehaviorSubject<Patient[]>(this.patients);
  }
}