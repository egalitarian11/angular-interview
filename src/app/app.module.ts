import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatientDataService } from './services/patient-data.service';
import { PatientComponent } from './patient-component/patient-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PatientComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PatientDataService]
})
export class AppModule { }
