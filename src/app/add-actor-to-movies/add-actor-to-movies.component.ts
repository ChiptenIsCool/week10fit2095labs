import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-actor-to-movies',
  templateUrl: './add-actor-to-movies.component.html',
  styleUrls: ['./add-actor-to-movies.component.css']
})
export class AddActorToMoviesComponent implements OnInit {

  movies: any[]=[];
  actors: any[]=[];
  actorId: string = ""
  movieId: string = ""

  constructor(private dbService: DatabaseService) { }

  onBooleanActor(item: any) {
    this.actorId = item._id;
  }
  
  onBooleanMovie(item:any){
    this.movieId = item._id;
  }
  onPuttingActorIntoMovie(){
    let obj = {id: this.actorId}
    this.dbService.putActorIntoMovie(this.movieId, obj).subscribe((data: any) => {
      console.log(data);
    });
    
  }

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
