import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMarketPageRoutingModule } from './update-market-routing.module';

import { UpdateMarketPage } from './update-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMarketPageRoutingModule
  ],
  declarations: [UpdateMarketPage]
})
export class UpdateMarketPageModule {}
