import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPrincipaPage } from './pagina-principa.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPrincipaPageRoutingModule {}
