import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaServiceService } from '../../services/tienda-service.service'
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-update-market-good',
  templateUrl: './update-market-good.page.html',
  styleUrls: ['./update-market-good.page.scss'],
})
export class UpdateMarketGoodPage implements OnInit {
  idMarket = null;
  datos:any={}

  constructor( 
    private route : ActivatedRoute,
    private tiendaService : TiendaServiceService,
    private allertCTRL : AlertController
    ) { }
  
  

  ngOnInit() {
    this.idMarket = this.route.snapshot.paramMap.get('custom_id');
    console.log('id traido', this.idMarket);
    this.getSpecificMarket(this.idMarket);
  }

  getSpecificMarket( id: string ){
    this.tiendaService.getSpecificMarket(id).subscribe((data:any)=>{
      this.datos = data.newFindTienda;
      console.log('Si funciona la consulta',this.datos);
      
    })
  }

  async update(){
    const alert = await this.allertCTRL.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message:'Muy bien tus datos estan actualizado',
      buttons:[
        {
          text:'cancel',
          role:'cancel',
          cssClass:'secondary',
          handler:(blah)=>{
            console.log('Confirm: blah');
          }
        },{
          text:'Ok',
          handler: async () =>{
            console.log('Comfirmado');
            const actaliz = await this.actualizar();
          }
        }
      ] 
    });
    await alert.present();
  }
 actualizar(){

    this.tiendaService.updateMarket(this.idMarket,this.datos).subscribe(data => { console.log(data) });
  }
}
