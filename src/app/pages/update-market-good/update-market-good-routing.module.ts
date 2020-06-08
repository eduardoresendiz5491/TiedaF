import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMarketGoodPage } from './update-market-good.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMarketGoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMarketGoodPageRoutingModule {}
