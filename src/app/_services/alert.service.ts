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
      header: 'Emergency Alert',
      subHeader: 'Urgent',
      message: 'Would you like to send a "I am OK" notification, to your contact numbers.',
      buttons: ['I am OK', 'I need help', 'Cancel']
    });

    await alert.present();
  }
}
