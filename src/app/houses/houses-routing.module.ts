import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesPage } from './houses.page';

const routes: Routes = [
  {
    path: '',
    component: HousesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesPageRoutingModule {}
