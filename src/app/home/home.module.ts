import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AddMarketPage } from '../pages/add-market/add-market.page';
import { UpdateMarketPage } from '../pages/update-market/update-market.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,AddMarketPage,UpdateMarketPage],
  entryComponents:[AddMarketPage,UpdateMarketPage]
})
export class HomePageModule {}
