import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-movies-between',
  templateUrl: './movies-between.component.html',
  styleUrls: ['./movies-between.component.css']
})
export class MoviesBetweenComponent implements OnInit {

  movies: any[]=[];
  actors: any[]=[];
  year1 = 0;
  year2 = 0;

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getMovies().subscribe((data: any)=>{
      console.log(data)
      this.ngOnInit()
      this.movies=data;
      
    })

    
  }

}
