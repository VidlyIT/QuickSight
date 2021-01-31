import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alert: AlertController) { }

  async emergencyAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Water Quality Alert',
      subHeader: 'Urgent',
      message: 'The water quality for tap 34342#4343 is good for drinking.',
      buttons: ['Report', 'Cancel']
    });

    await alert.present();
  }
}
