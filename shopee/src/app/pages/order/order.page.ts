import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  name:string = '';
  username:string = '';
  email:any = '';

  myData:any;
  parsedJson:any;

  constructor( private http:HttpClient) { }

  ngOnInit() {
  }
  httpRun(){
console.log("hello inside run http")
this.http.get('https://demo0884554.mockable.io/hello').subscribe(responseData=>{
  console.log(responseData)
  this.myData=JSON.stringify(responseData)
  console.log("myData : ", this.myData)
  this.parsedJson=JSON.parse(this.myData)
 this.name=this.parsedJson.name;
  console.log(this.name)
})

  }

}
