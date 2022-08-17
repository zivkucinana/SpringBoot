import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Preduzece } from 'src/app/models/preduzece';
import { Sektor } from 'src/app/models/sektor';
import { SektorService } from 'src/app/services/sektor.service';
import { SektorDialogComponent } from '../../dialogs/sektor-dialog/sektor-dialog.component';

@Component({
  selector: 'app-sektor',
  templateUrl: './sektor.component.html',
  styleUrls: ['./sektor.component.css']
})
export class SektorComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka','preduzece','actions'];
  dataSource!: MatTableDataSource<Sektor>;
  subscription!: Subscription;
  selectedSektor!: Sektor; 

  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(public sektorService:SektorService,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData(){
    this.subscription= this.sektorService.getAllSektor()
    .subscribe(data =>{
      //console.log(data);
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    }),
    (error:Error) => {
      console.log(error.name+ " " + error.message)
    }
  }

  public openDialog(flag:number,id?:number, naziv?:string, oznaka?:string,preduzece?: Preduzece)
  {
    const dialogRef= this.dialog.open(SektorDialogComponent,
      { data: { id, naziv, oznaka, preduzece } });
      dialogRef.componentInstance.flag=flag;
      dialogRef.afterClosed()
      .subscribe(result=>{
        if(result===1){
          this.loadData(); 
        }
      })
  }

  public selectRow(row:any){
    console.log(row);
    this.selectedSektor= row;
    console.log(this.selectedSektor);
  }

  applyFilter(filterValue:any) {
    filterValue = filterValue.target.value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
 

}
