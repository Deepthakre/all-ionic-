import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vregister',
  templateUrl: './vregister.page.html',
  styleUrls: ['./vregister.page.scss'],
})
export class VregisterPage implements OnInit {
  
  public errorMessage: string | undefined;

  data={
    gstNo:'',
    storeName:'',
    storeAddress:'',
    emailId:'',
    name:'',
    dob:'',
    gender:'',
    homeAddress:'',
    password:'',
    mobileNo:'',
    alternateMobileNo:'',
    storeType:'',
    storeCategory:'',
    aadharNo:'',
    sale:'',
    store:'',
    pan:'',
    revenue :'',
    bankName:'',
    accountNo:'',
    ifscCode:'',
    branch:''
   };

  constructor(private toastController: ToastController, private router: Router, private registerService:RegisterService
    ) { }

  ngOnInit() {
  }
  
  doSubmitForm(){
    console.log("Try to submit form");
    console.log("DATA ",this.data);

    if(this.data.emailId=='' || this.data.password=='')
    {
      this.presentToast("Fields can not be empty");
     
    }else{
    this.registerService.userRegistration(this.data).subscribe(
      response=>{
        console.log(response);
        this.presentToast("vendor Successfully Registered");
        this.router.navigateByUrl("/list");
    },
      error=>{
        
        console.log("Error from server : " + error);
        this.presentToast(error);
    } 
    )
  }
  }

  async presentToast(msg: string) {
     const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     });
    await toast.present();
  }

  
}


  
  





 


