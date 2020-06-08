import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMarketPageRoutingModule } from './add-market-routing.module';

import { AddMarketPage } from './add-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMarketPageRoutingModule
  ],
  declarations: [AddMarketPage]
})
export class AddMarketPageModule {}
