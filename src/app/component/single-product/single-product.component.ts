import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() item: any="";
  
  constructor(private cartService : CartService) { }

  ngOnInit() {
    console.log(this.item);
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
