import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  movieTitle: string = "";
  movieYear:number = 0;
  movies: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.dbService.getMovies().subscribe((data: any)=>{
      console.log(data)
      this.movies=data;
    })
  }

  onSaveMovie(){
    let newItem = {
      title: this.movieTitle,
      year: this.movieYear
    }

    this.dbService.createMovie(newItem).subscribe((data: any)=>{
      this.router.navigate(["/list-movies"]);
    })
  }



}
