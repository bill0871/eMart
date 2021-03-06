import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from "./user/user.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        ProductDetailComponent,
        NavbarComponent,
        CartComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbDropdownModule,
        NgbAlertModule,
        FormsModule,
        HttpClientModule,
        UserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
