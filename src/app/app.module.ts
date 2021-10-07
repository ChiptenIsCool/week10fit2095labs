import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { DeleteMoviesComponent } from './delete-movies/delete-movies.component';
import { DatabaseService } from './database.service'; //Service
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"; //Dependency Injection
import { DeleteBetweenComponent } from './delete-between/delete-between.component';
import { DeleteMovieTitleComponent } from './delete-movie-title/delete-movie-title.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { AddActorToMoviesComponent } from './add-actor-to-movies/add-actor-to-movies.component';
import { MoviesBetweenComponent } from './movies-between/movies-between.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { Week10Pipe } from './week10.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const week10RoutingTable:Routes=[
  {path: 'list-movies', component: ListMoviesComponent},
  {path: 'add-movies', component:AddMoviesComponent},
  {path: 'add-actor', component:AddActorComponent},
  {path: 'add-actor-to-movies', component:AddActorToMoviesComponent},
  {path:'delete-movies', component: DeleteMoviesComponent},
  {path:'delete-movies-between', component: DeleteBetweenComponent},
  {path: 'delete-movies-title', component: DeleteMovieTitleComponent},
  {path: 'list-movies-between', component:MoviesBetweenComponent},
  {path: '', component:ListMoviesComponent},
  {path:'**', component: ViewNotFoundComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    AddMoviesComponent,
    DeleteMoviesComponent,
    DeleteBetweenComponent,
    DeleteMovieTitleComponent,
    AddActorComponent,
    AddActorToMoviesComponent,
    MoviesBetweenComponent,
    ViewNotFoundComponent,
    Week10Pipe
  ],
  //Dependency Injection
  imports: [
    RouterModule.forRoot(week10RoutingTable,{useHash:true}),
    BrowserModule,
    HttpClientModule, 
    FormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
