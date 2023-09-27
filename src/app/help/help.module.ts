import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HelpPage } from './help.page';
import { HelpPageRoutingModule } from './help-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HelpPageRoutingModule
  ],
  declarations: [HelpPage]
})
export class HelpPageModule {}
