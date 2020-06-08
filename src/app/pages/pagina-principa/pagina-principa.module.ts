import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPrincipaPageRoutingModule } from './pagina-principa-routing.module';

import { PaginaPrincipaPage } from './pagina-principa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPrincipaPageRoutingModule
  ],
  declarations: [PaginaPrincipaPage]
})
export class PaginaPrincipaPageModule {}
