import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  //http request
  result: any;
  getMovies() {
    return this.http.get("/movies");
  }
  createActor(data: any) {
    return this.http.post("/actors", data, httpOptions);
    //data is an object contains the actor’s details that are collected from the UI elements

    // httpOptions  is an object that specifies a set of options for the request such as the format of the body (JSON in our case).
  }
  createMovie(data: any) {
    return this.http.post("/movies", data, httpOptions);
    //httpOptions (look at line 3) is to declare that the data is type JSON
    //object that specify the type of request
  }
  deleteMovie(id: string) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }
  deleteActor(id: string) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }
  deleteMovieBetween(year1:number, year2:number){
    let url = "/movies/deletebetween/" + year1+"/"+year2;
    return this.http.delete(url, httpOptions);
    
  }
  deleteMovieByTitle(title:string){
    let url = "/movies/deletebytitle/" + title;
    return this.http.delete(url, httpOptions);
  }
  updateActor(id:string, data:any) {
    let url = "/actors/update/" + id;
    return this.http.put(url, data, httpOptions);
  }

  
  getActors() {
    return this.http.get("/actors");
  }

  putActorIntoMovie(id: string, data:any){
    let url = "/movies/" + id +"/actors";
    return this.http.post(url, data, httpOptions);

  }

  
}