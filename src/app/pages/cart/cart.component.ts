import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems:any;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.cartItems = this.foodService.getCartItems();
  }
}