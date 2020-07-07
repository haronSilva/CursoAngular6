import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.service'
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService,
    private route :ActivatedRoute) { }
  restaurant: Restaurant;
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.restaurantsService.restaurantById(id).subscribe((data: Restaurant) => this.restaurant = data);
  }

}
