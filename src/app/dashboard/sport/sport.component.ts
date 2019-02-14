import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/api-data.service';
import { DBinterService } from 'src/app/dbinter.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
   public article: any;
  constructor(private data: ApiDataService, private dbinter : DBinterService) { }
  addArticle(a: any){
    this.dbinter.addArticle(a);
  }
  ngOnInit() {
    this.data.GetTH('sports', 1).subscribe(x => this.article = x);

  }



}
