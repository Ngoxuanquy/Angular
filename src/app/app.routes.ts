import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';

export const routes: Routes = [
    {
        path: "products", component: ProductsComponent
    },
    {
        path: "shop", component: ShopComponent
    },
 
];
