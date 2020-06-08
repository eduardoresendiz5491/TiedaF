import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TiendaServiceService } from '../../services/tienda-service.service'

@Component({
  selector: 'app-add-market',
  templateUrl: './add-market.page.html',
  styleUrls: ['./add-market.page.scss'],
})
export class AddMarketPage implements OnInit {
  datos:any = {
    nameTienda:'',
    adressTienda:'',
    streetTienda:'',
    cellphoneTienda:'',
  }

  constructor( 
    private modalCTRL : ModalController,
    private tiendaService : TiendaServiceService
    ) { }

  ngOnInit() {
  }
  async close(){
    await this.modalCTRL.dismiss();
  }
  send(s){
    console.log(this.datos);
    this.tiendaService.createMarket(this.datos).subscribe((data:any) =>{
      console.log(data);
      
    });
  }

  

}
