import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressInfoComponent } from './address-info/address-info.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddressInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: AddressInfoComponent}])
  ],
})
export class AddressModule { }
