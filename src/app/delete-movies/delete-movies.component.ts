import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-delete-movies',
  templateUrl: './delete-movies.component.html',
  styleUrls: ['./delete-movies.component.css']
})
export class DeleteMoviesComponent implements OnInit {
  

  movies: any[]=[];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getMovies().subscribe((data: any)=>{
      console.log(data)
      this.movies=data;
    })
  }
  onDeleteMovie(item:any){
    this.dbService.deleteMovie(item._id).subscribe((data)=>{
      console.log(data);
    })

    
  }

}
