import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import { ApiDataService } from 'src/app/api-data.service';
import { DBinterService } from 'src/app/dbinter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public article: any;

  constructor(private data: ApiDataService, public dialog: MatDialog, private db: DBinterService) { }
  addArticle(x) {
    this.db.addArticle(x);
  }
  openDialog(i): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: 'auto',
      height: '100vh',
       data: i
    });
  }

  ngOnInit() {
    this.data.shareddata.subscribe(x => this.article = x);  
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) 
   public data: any , private db: DBinterService) {}

   add(i) {
   this.db.addArticle(i);}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
