import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/api-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public article : any
  public req : any

  constructor(private data : ApiDataService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.data.shareddata.subscribe(x=>this.article=x)  
  }
  

}
