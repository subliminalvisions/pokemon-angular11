import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { LayoutComponent } from './layout/layout.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

const routes: Routes = [
  { path: '', redirectTo: '/pokelist/0', pathMatch: 'full'},
  { path: 'pokelist/NaN', redirectTo: '/pokelist/0', pathMatch: 'full'},
  { path: 'pokelist', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [PokemonService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
