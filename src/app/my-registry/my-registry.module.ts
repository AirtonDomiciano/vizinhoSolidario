import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MyRegistryPageRoutingModule } from './my-registry-routing.module';
import { MyRegistryPage } from './my-registry.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MyRegistryPageRoutingModule
  ],
  declarations: [MyRegistryPage]
})
export class MyRegistryPageModule {}
