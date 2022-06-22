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
import { FormNaiss3Component } from './form-naiss3/form-naiss3.component';
import { FormEnfantComponent } from './form-enfant/form-enfant.component';
import { FormdefuntComponent } from './formdefunt/formdefunt.component';
import { FormdecesComponent } from './formdeces/formdeces.component';
import { ConAdminComponent } from './con-admin/con-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },

 {path: 'connexion', component: ConnexionComponent},
 {path:'acceuil', component: AcceuilComponent},
 {path: 'menu', component: MenuComponent},
 {path: 'formulaire_de_naissance', component: FormNaissComponent},
 {path: 'formulaire_de_naissance2', component: FormNaiss2Component},
 {path: 'formulaire_de_naissance3', component: FormNaiss3Component},
 {path: 'formulaire_enfant', component: FormEnfantComponent},
 {path: 'formulaire_de_deces', component: FormdecesComponent},
 {path: 'formulaire_du_defunt', component: FormdefuntComponent },
 {path: 'connexion_administrateur', component:ConAdminComponent},
 {path: 'dashboard', component:DashboardComponent}




]

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ConnexionComponent,
    MenuComponent,
    FormNaissComponent,
    FormNaiss2Component,
    FormNaiss3Component,
    FormEnfantComponent,
    FormdefuntComponent,
    FormdecesComponent,
    ConAdminComponent,
    DashboardComponent

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
