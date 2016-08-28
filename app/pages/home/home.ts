import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {
  
  }
  
  public getBarcode(): void {
    let alert = this.alertCtrl.create({
      title: 'Barcode',
      message: 'hello',
      buttons: ['OK']
    });
    alert.present();
  }
}
