/*import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
*/

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import{ ProfilePage} from '../pages/profile/profile.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;
  photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeFAKfReAoGRDn2qm4ydK3m5yuYxrcnl2m7PcxGODnVPqc14bTwO6q2jPEY6TaLkcIv0&usqp=CAU';
  constructor(private modalController: ModalController) {}

  async openOptionSelection() {
    const modal = await this.modalController.create({
      component: ProfilePage,
     
    });

    modal.onDidDismiss()
    .then(res => {
      console.log(res);
      if (res.role !== 'backdrop') {
        this.takePicture(res.data);
      }
    });
    return await modal.present();
  }

 
}

