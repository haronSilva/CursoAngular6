import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }
  reviews : Observable<Object>
  ngOnInit(): void {
    /*
    Como estou navegando na filha eu preciso acessar o id que está no objeto parent!
    Finalmente aprendi o uso de pipes e nesse caso irei usar o pipe async que substitui o uso do subscribe!
    */

    let restaurantId = this.route.parent.snapshot.params['id'];
    this.reviews = this.restaurantsService.reviewsByRestaurantID(restaurantId);
  }

}
