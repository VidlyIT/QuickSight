import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../_components/components.module';

import { HomePage } from './home.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ZXingScannerModule
  ],
  declarations: [HomePage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class HomePageModule {}
