import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { SignupComponent } from './components/signup/signup.component';
import { EgitimdetayComponent } from './components/egitimdetay/egitimdetay.component';
import { FavoriteeducationComponent } from './components/favoriteeducation/favoriteeducation.component';


const routes: Routes = [{ path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'favori-urunlerim',
    component: FavoriteeducationComponent,
  },
  {
    path: 'sepet',
    component: ShoppingcartComponent,
  },
  { path: 'kaydol', component: SignupComponent },
  { path: 'giris', component: LoginComponent },
  { path: 'egitim-detay', component: EgitimdetayComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
