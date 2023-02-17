import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [
  {path:"",component:StudentaddComponent},
  {path:"studentdetails",component:StudentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
