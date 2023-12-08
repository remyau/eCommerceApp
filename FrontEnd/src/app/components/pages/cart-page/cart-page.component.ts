import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from 'src/app/shared/models/cart';
import { cartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:cart;

  constructor(private cartservice:CartService){
    this.cartservice.getCartObservable().subscribe((cart)=> this.cart=cart);
  }

  removeFromCart(cartItem:cartItem){
    this.cartservice.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:cartItem,quantityString:string){
    const quantity=parseInt(quantityString);
    this.cartservice.changeQuantity(cartItem.food.id,quantity);
  }
}
