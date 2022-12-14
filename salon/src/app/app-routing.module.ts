import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 //{
  //  path: 'home',
  //  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  //},
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
    path: 'singup',
    loadChildren: () => import('./pages/singup/singup.module').then( m => m.SingupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
