import { Component, OnInit, ViewChild } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
   
  UserData:any=[];
 @ViewChild(IonModal)
  modal!: IonModal; 
  public cartItemList : any =[]
 
  isModalOpen: boolean | undefined;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://demo2421825.mockable.io/vendorList').subscribe((Data: any)=>{
    console.log(Data);
    this.UserData=Data;


    });
  }
cancel(){
  this.modal.dismiss(null,'cancel')
}
 confirm(item:any){
  this.cartItemList.push(item);
  this.confirm(item)
 }

// setOpen(isOpen:boolean){
//   this.cartItemList.push(item);
//   this.UserData.next(this.cartItemList);
// this.isModalOpen=isOpen;
// }




}