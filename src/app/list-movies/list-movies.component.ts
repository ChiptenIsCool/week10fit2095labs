import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  movies: any[]=[];
  actors: any[]=[];

  constructor(private dbService: DatabaseService) { }
  //to provide a reference to the database service

  ngOnInit(): void {
    this.dbService.getMovies().subscribe((data: any)=>{
      console.log(data)
      this.movies=data;
    })
    this.dbService.getActors().subscribe((data: any)=>{
      console.log(data)
      this.actors=data;
    })

    
  }

}
