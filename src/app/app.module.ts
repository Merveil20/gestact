import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuComponent } from './menu/menu.component';
import { FormNaissComponent } from './form-naiss/form-naiss.component';
import { FormNaiss2Component } from './form-naiss2/form-naiss2.component';

const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full'
  },

 {path: 'connexion', component: ConnexionComponent},
 {path:'acceuil', component: AcceuilComponent},
 {path: 'menu', component: MenuComponent},
 {path: 'formulaire_de_naissance', component: FormNaissComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ConnexionComponent,
    MenuComponent,
    FormNaissComponent,
    FormNaiss2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
