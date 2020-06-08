import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMarketPage } from './update-market.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMarketPageRoutingModule {}
