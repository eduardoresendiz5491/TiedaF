import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMarketGoodPageRoutingModule } from './update-market-good-routing.module';

import { UpdateMarketGoodPage } from './update-market-good.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMarketGoodPageRoutingModule
  ],
  declarations: [UpdateMarketGoodPage]
})
export class UpdateMarketGoodPageModule {}
