import { Component, OnInit } from '@angular/core';
import { Caddy } from 'src/app/models/caddy.models';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { Training } from 'src/app/models/training.models';


@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {
  
  listCaddy: Training [] |undefined ;
  listTotal=0
  constructor(private CartService:CartService, private router: Router) { }

  ngOnInit(): void {
    this.listCaddy=[];
    this.listCaddy=this.CartService.getCaddy();
    this.listTotal=this.CartService.getTotal();
   
  

    
}

onDeleteTraining (training:Training){
this.CartService.removeTraining(training);
}

onCommand(){
  this.router.navigateByUrl('customer');
}
}
  

