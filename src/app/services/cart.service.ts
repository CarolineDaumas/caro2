import { Injectable } from '@angular/core';
import { Training } from '../models/training.models';
import { Caddy } from '../models/caddy.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  caddy=window.localStorage
  
  constructor() { }

  

  removeTraining(item: Caddy) {
    let key=JSON.stringify(item.ref)
    this.caddy.removeItem(key)
  }

  addTraining(training: Training) {
    //let caddy=window.localStorage
    let key=JSON.stringify(training.id)
    let sum=training.quantity*training.price
  
   this.caddy.setItem(key, JSON.stringify({ref:training.id, name: training.name, qty: training.quantity, sum:sum }))
    
  }


}
