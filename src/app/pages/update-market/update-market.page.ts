import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TiendaServiceService } from '../../services/tienda-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-market',
  templateUrl: './update-market.page.html',
  styleUrls: ['./update-market.page.scss'],
})
export class UpdateMarketPage implements OnInit {

  //datosTienda:any[]=[]
  datos:any = {};
  constructor(
    private modalController : ModalController,
    private tiendaService :TiendaServiceService,
    private route : ActivatedRoute
    ) {
      
    }
  
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    console.log('id traido', id);
    this.getSpecificMarket(id);
  }

  getSpecificMarket( id: string ){
    this.tiendaService.getSpecificMarket(id).subscribe((data:any)=>{
      this.datos = data.newFindTienda;
      console.log('Si funciona la consulta',this.datos);
      
    })
  }

  updateMarket(){

  }

}
