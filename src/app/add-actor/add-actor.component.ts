import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  actorName: string = ""
  actorYear: number = 0;
  actorId: string = ""; 
  actors: any[] = [];


  updateboolean = false;

  constructor(private dbService: DatabaseService, private router: Router ) { }

  ngOnInit(): void {
    this.dbService.getActors().subscribe((data: any)=>{
      console.log(data)
      this.actors=data;
    })
  }

  onAddActor(){
    let newItem = {
      name: this.actorName,
      year: this.actorYear
    }

    this.dbService.createActor(newItem).subscribe((data: any)=>{
      this.ngOnInit();
    })
  }
  onDeleteActor(item:any){
    this.dbService.deleteActor(item._id).subscribe((data)=>{
      this.ngOnInit();
    })
  }

  onSelectUpdate(item: any) {
    
    if (item._id === this.actorId){
      this.updateboolean = !this.updateboolean;
    }
    else{
      this.actorName = item.name;
      this.actorYear = item.year;
      this.actorId = item._id;
      this.updateboolean = true;
    }
    
  }
  onUpdateActor() {
    let obj = { name: this.actorName, year: this.actorYear };
    this.dbService.updateActor(this.actorId, obj).subscribe(result => {
      this.ngOnInit();
    });
  }
  
  

}
