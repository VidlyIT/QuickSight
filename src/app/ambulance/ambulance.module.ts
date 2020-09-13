import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AmbulancePage } from './ambulance.page';
import { FooterTabsComponent } from '../_components/footer-tabs/footer-tabs.component';
import { ComponentsModule } from '../_components/components.module';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: AmbulancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MaterialModule
  ],
  declarations: [AmbulancePage]
})
export class AmbulancePageModule {}
