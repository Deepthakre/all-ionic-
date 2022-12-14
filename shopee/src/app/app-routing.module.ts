import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loging',
    pathMatch: 'full'
  },
  {
    path: 'loging',
    loadChildren: () => import('./pages/loging/loging.module').then( m => m.LogingPageModule)
  },
  
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./pages/myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'mens',
    loadChildren: () => import('./pages/mens/mens.module').then( m => m.MensPageModule)
  },
  {
    path: 'womens',
    loadChildren: () => import('./pages/womens/womens.module').then( m => m.WomensPageModule)
  },
  {
    path: 'kisd',
    loadChildren: () => import('./pages/kisd/kisd.module').then( m => m.KisdPageModule)
  },
  {
    path: 'appliance',
    loadChildren: () => import('./pages/appliance/appliance.module').then( m => m.AppliancePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
