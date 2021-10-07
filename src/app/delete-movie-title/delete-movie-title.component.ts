import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-delete-movie-title',
  templateUrl: './delete-movie-title.component.html',
  styleUrls: ['./delete-movie-title.component.css']
})
export class DeleteMovieTitleComponent implements OnInit {
  movies: any[]=[]
  movieTitle = "";
  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getMovies().subscribe((data: any)=>{
      console.log(data)
      this.movies=data;
    })
  }

  onDeleteByTitle(){
    this.dbService.deleteMovieByTitle(this.movieTitle).subscribe((data)=>{
      console.log(data);
    })

    
  }

}
