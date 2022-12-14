import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.page.html',
  styleUrls: ['./loging.page.scss'],
})
export class LogingPage implements OnInit {

  constructor(private router:Router) { }

  goto(){
    this.router.navigate(['demo'])
  }
  ngOnInit() {
  }

}
