import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./cart/cart.component";


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },

    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(l => l.LoginModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(s => s.SignupModule)
    },
    {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(o => o.OrderModule)
    },
    {
        path: 'inventory',
        loadChildren: () => import('./seller-mgmt/inventory/inventory.module').then(i => i.InventoryModule)
    },

    { path: 'cart', component: CartComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },


    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
