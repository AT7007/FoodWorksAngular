import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(private foodService: FoodService) {}

  placeOrder(): void {
    alert('Order placed successfully!');
    this.foodService.clearCart();
  }
}