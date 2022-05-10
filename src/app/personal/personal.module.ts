import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: PersonalInfoComponent}]),
    ReactiveFormsModule
  ],
})
export class PersonalModule { }
