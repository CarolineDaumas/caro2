import { Component, OnInit } from '@angular/core';
import { Caddy } from 'src/app/models/caddy.models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {
  listCaddy: Caddy [] |undefined ;
  listTotal=0
  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.listCaddy=[]
  

    let caddy = window.localStorage;
    let caddySize = caddy.length
    let total = 0
    

    for (let i = 0; i < caddySize; i++) {

      let obj = JSON.parse(caddy.getItem(caddy.key(i)||"")||"")
          this.listCaddy.push(obj)
          console.log(obj)

      this.listTotal += obj.sum
}
console.log(total)

for (let i=0; i<this.listCaddy.length;i++ ) {
  console.log(this.listCaddy[i])

}

}

onDeleteTraining (item: Caddy){
  this.CartService.removeTraining(item);
}
  
}
