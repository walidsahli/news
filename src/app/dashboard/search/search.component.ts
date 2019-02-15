import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/api-data.service';
import { DBinterService } from 'src/app/dbinter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public article : any

  constructor(private data : ApiDataService, private db : DBinterService) { }
  addArticle(x){
    this.db.addArticle(x)
  }

  ngOnInit() {
    this.data.shareddata.subscribe(x=>this.article=x)  
  }
}
