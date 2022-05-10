import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExperienceInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: ExperienceInfoComponent}])
  ],
})
export class ExperienceModule { }
