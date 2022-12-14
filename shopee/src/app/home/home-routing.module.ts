import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'order',
        children:[
          {
            path:'',
            loadChildren:() => import('../pages/order/order.module').then(m => m.OrderPageModule)
          }
        ]
      }
    ]
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
