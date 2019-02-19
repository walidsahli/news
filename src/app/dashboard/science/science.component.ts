import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/api-data.service';
import { DBinterService } from 'src/app/dbinter.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  public article: any;
  public length: number
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageindex: number = 1
  pageEvent: PageEvent;

  constructor(private data: ApiDataService, private dbinter: DBinterService) { }
  addArticle(a: any) {
    this.dbinter.addArticle(a);
  }

  ngOnInit() {
    this.data.GetTH('science', this.pageindex , this.pageSize).subscribe((x: any) => { this.article = x; 
     if( x.totalResults%this.pageSize != 0 ){
      this.length = Math.ceil(x.totalResults/this.pageSize)
     }
    else {
      this.length = x.totalResults/this.pageSize
    } });

  }

  changepage(x: PageEvent) {
    console.log(x)
    this.pageindex = x.pageIndex + 1
    this.pageSize=x.pageSize
    this.data.GetTH('science', this.pageindex , this.pageSize).subscribe((x: any) => { this.article = x; 
      if( x.totalResults%this.pageSize != 0 ){
       this.length = Math.ceil(x.totalResults/this.pageSize)
      }
     else {
       this.length = x.totalResults/this.pageSize
     } })
  }


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
