import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foodItems:any;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodItems = this.foodService.getFoodItems();
  }
}