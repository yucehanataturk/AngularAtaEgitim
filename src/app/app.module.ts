import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { FavoriteeducationComponent } from './components/favoriteeducation/favoriteeducation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { SignupComponent } from './components/signup/signup.component';
import { EgitimdetayComponent } from './components/egitimdetay/egitimdetay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FavoriteeducationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ShoppingcartComponent,
    SignupComponent,
    EgitimdetayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
