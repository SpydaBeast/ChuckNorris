import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  
  public jokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getAllJokes();
  }

  getAllJokes(){
    this._dataService.getAllJokes().subscribe(
      data => { this.jokes = data },
    );
  }

  

}
