import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import {RestaurantsService} from "./restaurants.service"

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  /**
   * Com esse trecho o angular irá criar essa propriedade no componente 
   * e a injeção acontecerá quando eu informar no meu array de providers
  */
  constructor(private restaurantService: RestaurantsService ) { }
  restaurantBakery = {"srcImage":"assets/img/restaurants/tasty.png", "classification":"4.5", "name":"Tasty Treats", "type":"Bakery"}
  restaurantes:Restaurant[] = [];
  ngOnInit(): void {
    this.restaurantService.restaurants().subscribe((data: Restaurant[]) => this.restaurantes=data);
  }

}
