import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Customer } from '../models/customer.models';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name:string="";
  firstname: string="";
  address:string="";
  phone:string="";
  email:string="";
 


  constructor(public cartService:CartService ) { }

  ngOnInit(): void {
  }




onSaveCustomer(customer: Customer){
  // let newCustomer=new Customer(customer.name,customer.firstname, customer.address, customer.phone, customer.email)
  // console.log(newCustomer)
  //console.log(customer)
  this.cartService.setCustomer(customer);
}



}
