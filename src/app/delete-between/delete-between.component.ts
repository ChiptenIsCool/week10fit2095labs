import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-delete-between',
  templateUrl: './delete-between.component.html',
  styleUrls: ['./delete-between.component.css']
})
export class DeleteBetweenComponent implements OnInit {

  movies: any[]=[];
  year1 = 2014;
  year2 = 2021;

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getMovies().subscribe((data: any)=>{
      console.log(data)
      this.movies=data;
    })
  }
  onDeleteBetween(){
    this.dbService.deleteMovieBetween(this.year1, this.year2).subscribe((data)=>{
      console.log(data);
    })

    
  }

}
