import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressModule } from './address/address.module';
import { ExperienceModule } from './experience/experience.module';
import { PersonalModule } from './personal/personal.module';

const routes: Routes = [
  {
    path: 'personal',
    loadChildren: () =>
      // import('./personal/personal.module').then(m => m.PersonalModule)
      PersonalModule
  },
  {
    path: 'address',
    loadChildren: () => AddressModule
  },
  {
    path: 'experience',
    loadChildren: () => ExperienceModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
