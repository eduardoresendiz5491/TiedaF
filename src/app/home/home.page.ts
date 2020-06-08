
import { TiendaServiceService } from '../services/tienda-service.service';
import {UpdateMarketPage } from '../pages/update-market/update-market.page';
import { Component } from '@angular/core';
import { AddMarketPage } from '../pages/add-market/add-market.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tienda:any[] =[]

  constructor( 
    private marketService : TiendaServiceService,
    private modalCTRL : ModalController,
    private route : Router
    ) {
    this.getMarkets();
  }

  getMarkets(){
    this.marketService.getMarket().subscribe((data : any) =>{
      this.tienda = data.newTiendas;
      console.log(this.tienda);
    });
  }
  async addMarkets(){
    const modal = await this.modalCTRL.create({
      component: AddMarketPage
    });
    return await modal.present();
  }
  vermas( id: String){
    this.route.navigate(['/update-market',{custom_id: id}]); //Debemos agregar la ruta de la pagina a la que eueremos ir
  }
  update(id: String){
    this.route.navigate(['/update-market-good',{custom_id : id}])
  }

}
