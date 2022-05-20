import { Injectable } from '@angular/core';
import { Training } from '../models/training.models';
import { Caddy } from '../models/caddy.models';
import { CustomerComponent } from '../customer/customer.component';
import { Customer } from '../models/customer.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // caddy = window.localStorage;
  listCaddy: Training[] = [];
  listTotal = 0;
  // customer = new Customer("", "", "", "", "")
  // listCustomers: Customer[] | undefined




  constructor(private router: Router) {
    let cart = localStorage.getItem("cart")
    if (cart) {
      this.listCaddy = JSON.parse(cart)
    }

  }



  removeTraining(training: Training) {
    // let key = JSON.stringify(item.ref)
    // this.caddy.removeItem(key)
    // this.displayCaddy();
   
    
    //this.listCaddy.splice(training.id);
    const index: number  = this.listCaddy.indexOf(training);
    this.listCaddy.splice(index, 1);
    localStorage.removeItem("cart")
    this.getTotal();
  }

  addTraining(training: Training) {
    //let caddy=window.localStorage
    // let key = JSON.stringify(training.id)
    // let sum = training.quantity * training.price

    // this.caddy.setItem(key, JSON.stringify({ ref: training.id, name: training.name, qty: training.quantity, sum: sum }))

    this.listCaddy.push(training)

    localStorage.setItem("cart", JSON.stringify(this.listCaddy))
  }

  getCaddy() {
    return this.listCaddy
  }

  // displayCaddy() {
  //   this.listCaddy = [];
  //   let caddy = window.localStorage;
  //   let caddySize = caddy.length;
  //  // let customer = this.customer


  //   this.listCaddy = []
  //  // let keyMail = this.getCustomer().email

  //   for (let i = 0; i <caddySize; i++) {
  //    // let key = JSON.stringify(i)


  //     let obj = JSON.parse(this.caddy.getItem(caddy.key(i)||"") || "")
  //     this.listCaddy.push(obj)
  //     this.listTotal += obj.sum
  //     // filter on key


  //     // if (key != keyMail) {
  //     //   let obj = JSON.parse(this.caddy.getItem(key) || "")
  //     //   this.listCaddy.push(obj)
  //     //   this.listTotal += obj.sum

  //     }
  //     return this.listCaddy

  // }

  //console.log('total', this.total);




  //   for (let i = 0; i < caddySize; i++) {

  //     if (caddy.key(i) != customer.email) {
  //       let obj = JSON.parse(caddy.getItem(caddy.key(i) || "") || "")
  //       this.listCaddy.push(obj)
  //       console.log(obj)
  //       this.listTotal += obj.sum
  //     }


  //   }
  //   console.log(this.listTotal)

  //   for (let i=0; i<this.listCaddy.length;i++ ) {
  //     console.log(this.listCaddy[i])

  //   }
  //  return this.listCaddy;


  getTotal() {

    for (let i = 0; i < localStorage.length; i++)
     {
      this.listTotal = this.listTotal + (this.listCaddy[i].quantity) * (this.listCaddy[i].price)
    }
    return this.listTotal
  }

  setCustomer(customer: Customer) {
    // this.listCaddy = [];

    //this.customer=customer
    // customer = new Customer(customer.name, customer.firstname, customer.address, customer.phone, customer.email)

    // let key = customer.email

    localStorage.setItem("customer", JSON.stringify(customer))

    //alert("Utilisateur enregistré")

    // 
    //this.listCustomers= [];

    // console.log(this.listCustomers)
  }

  getCustomer() {
    let customer = localStorage.getItem("customer")
    if (customer) {
      return JSON.parse(customer)
    }
    return new Customer("unknown", "", "", "", "");
  }

}

