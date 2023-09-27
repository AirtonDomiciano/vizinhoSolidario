import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRegistryPage } from './my-registry.page';

const routes: Routes = [
  {
    path: '',
    component: MyRegistryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRegistryPageRoutingModule {}
