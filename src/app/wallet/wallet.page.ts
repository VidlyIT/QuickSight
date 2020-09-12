import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(
    private nav: NavController,
    private title: Title,
    private router: Router
  ) { }

  ngOnInit() {
    this.title.setTitle('Wallet');
  }

  goBack() {
    this.nav.back();
  }

  onSearch() {
    this.router.navigate(['/medical-edit']);
  }

}
