import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/api-data.service';
import { DBinterService } from 'src/app/dbinter.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
   public article: any;
  constructor(private data: ApiDataService, private dbinter : DBinterService) { }
  addArticle(a: any){
    this.dbinter.addArticle(a);
  }

  ngOnInit() {
    this.data.GetTH('technology', 1).subscribe(x => this.article = x);

  }

}
