import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleItemComponent } from './pages/single-item/single-item.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item/:id', component: SingleItemComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
];