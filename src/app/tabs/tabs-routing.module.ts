import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'houses',
        loadChildren: () => import('../houses/houses.module').then(m => m.HousesPageModule)
      },
      {
        path: 'my-registry',
        loadChildren: () => import('../my-registry/my-registry.module').then(m => m.MyRegistryPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../help/help.module').then(m => m.HelpPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/houses',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/houses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
