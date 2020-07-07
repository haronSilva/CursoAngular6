import {Routes} from '@angular/router';
import{HomeComponent} from "./home/home.component";
import{AboutComponent} from "./about/about.component";
    import { from } from 'rxjs';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
/**
 * Através do router eu vou conseguir navegar entre os componente e configuração é bem simples:
 * path - url que o angular vai botar e em seguida o componente que será mostrado.
 * 
 * Ainda precisa do componente router-outlet e nos links serão usados o routerLink como property bind
 * e passando a rota desejada
 */
export const ROUTES: Routes = [
    {path:"", component:HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"restaurant/:id", component:RestaurantDetailComponent,
    children:[
        {path:"", redirectTo:'menu', pathMatch:"full"},
        {path:"menu", component:MenuComponent},
        {path:"reviews",component:ReviewsComponent}
    ]},
    {path:"restaurants", component: RestaurantsComponent}
]