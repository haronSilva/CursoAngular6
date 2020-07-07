import {Restaurant} from "./restaurant/restaurant.model"
import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import {MEAT_API} from "../app.api"
import {ErrorHandler} from "../app.error-handler"
@Injectable()
export class RestaurantsService{
    constructor(private http: HttpClient){}

    restaurants():Observable<Object>{
             
          return this.http.get(`${MEAT_API}/restaurants`).pipe(catchError(ErrorHandler.errorHandler))
    }

    restaurantById(id:string) : Observable<Object>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`).pipe(catchError(ErrorHandler.errorHandler))
    }

    reviewsByRestaurantID(id:string) : Observable<Object>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).pipe(catchError(ErrorHandler.errorHandler))
    }
}