import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HousesPage } from './houses.page';
import { HousesPageRoutingModule } from './houses-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HousesPageRoutingModule
  ],
  declarations: [HousesPage]
})
export class HousesPageModule {}
