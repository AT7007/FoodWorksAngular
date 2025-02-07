import { Injectable } from '@angular/core';

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number; // Optional for cart purposes
}

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foodItems: FoodItem[] = [
    { id: 1, name: 'Pizza', description: 'Cheesy delight', price: 10, image: 'assets/images/pizza.jpg' },
    { id: 2, name: 'Burger', description: 'Juicy and tasty', price: 8, image: 'assets/images/burger.jpg' },
    { id: 3, name: 'Pasta', description: 'Italian classic', price: 12, image: 'assets/images/pasta.jpg' },
  ];

  private cart: FoodItem[] = [];

  getFoodItems(): FoodItem[] {
    return this.foodItems;
  }

  getFoodItemById(id: number): FoodItem | undefined {
    return this.foodItems.find(item => item.id === id);
  }

  getCartItems(): FoodItem[] {
    return this.cart;
  }

  addToCart(item: FoodItem): void {
    const cartItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (cartItem) {
      cartItem.quantity! += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
  }

  clearCart(): void {
    this.cart = [];
  }
}