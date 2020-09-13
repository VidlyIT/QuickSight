import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { MedicalPage } from './medical/medical.page';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'medical-edit',
    loadChildren: './medical/medical.module#MedicalPageModule'
  },
  {
    path: 'ambulance',
    loadChildren: './ambulance/ambulance.module#AmbulancePageModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterPageModule'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountPageModule'
  },
  {
    path: 'schedule',
    loadChildren: './schedule/schedule.module#SchedulePageModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsPageModule'
  },
  {
    path: 'marketplace',
    loadChildren: './marketplace/marketplace.module#MarketplacePageModule'
  },
  {
    path: 'notifications',
    loadChildren: './notifications/notifications.module#NotificationsPageModule'
  },
  {
    path: 'videos',
    loadChildren: './videos/videos.module#VideosPageModule'
  },
  {
    path: 'assistant',
    loadChildren: './assistant/assistant.module#AssistantPageModule'
  },
  {
    path: 'referrals',
    loadChildren: './referrals/referrals.module#ReferralsPageModule'
  },
  {
    path: 'wallet',
    loadChildren: './wallet/wallet.module#WalletPageModule'
  },
  { path: '**', loadChildren: './error/error.module#ErrorPageModule' },
  { path: 'medical', loadChildren: './medical/medical.module#MedicalPageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'ambulance', loadChildren: './ambulance/ambulance.module#AmbulancePageModule' },
  { path: 'emergency-category', loadChildren: './emergency-category/emergency-category.module#EmergencyCategoryPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
