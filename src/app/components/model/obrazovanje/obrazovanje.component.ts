import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Obrazovanje } from 'src/app/models/obrazovanje';
import { ObrazovanjeService } from 'src/app/services/obrazovanje.service';
import { ObrazovanjeDialogComponent } from '../../dialogs/obrazovanje-dialog/obrazovanje-dialog.component';

@Component({
  selector: 'app-obrazovanje',
  templateUrl: './obrazovanje.component.html',
  styleUrls: ['./obrazovanje.component.css']
})
export class ObrazovanjeComponent implements OnInit,OnDestroy {

  displayedColumns = ['id', 'naziv', 'stepenStrucneSpreme','opis', 'actions'];
  dataSource!: MatTableDataSource<Obrazovanje>;
  subscription!: Subscription;

  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private obrazovanjeService: ObrazovanjeService,
    public dialog:MatDialog) { }
//sta se desava kada se komponenta ocita-->
  ngOnInit(): void {
    this.loadData(); 

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData(){
    this.subscription= this.obrazovanjeService.getAllObrazovanje()
    .subscribe(data =>{
      //console.log(data);
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }),
    (error:Error) => {
      console.log(error.name+ " " + error.message)
    }
  }

  public openDialog(flag:number,id? :number, naziv?:string, stepenStrucneSpreme?:string,opis?: string )
  {
    const dialogRef= this.dialog.open(ObrazovanjeDialogComponent,
      { data: { id, naziv, stepenStrucneSpreme,opis } })
      dialogRef.componentInstance.flag=flag;
      dialogRef.afterClosed()
      .subscribe(result=>{
        if(result===1){
          this.loadData(); 
        }
      })
  }

  applyFilter(filterValue:any) {
    filterValue = filterValue.target.value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
