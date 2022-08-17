import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Obrazovanje } from 'src/app/models/obrazovanje';
import { Radnik } from 'src/app/models/radnik';
import { Sektor } from 'src/app/models/sektor';
import { PreduzeceService } from 'src/app/services/preduzece.service';
import { RadnikService } from 'src/app/services/radnik.service';
import { RadnikDialogComponent } from '../../dialogs/radnik-dialog/radnik-dialog.component';

@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css']
})
export class RadnikComponent implements OnInit,OnChanges, OnDestroy {

  displayedColumns = ['id', 'brojLk', 'ime','prezime','obrazovanje', 'sektor','actions']; 
  subscription!: Subscription;
  dataSource!: MatTableDataSource<RadnikComponent>;
  @Input() selectedSektor!:Sektor;

  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private radnikService: RadnikService,
    public dialog:MatDialog) { }


    ngOnChanges(changes: SimpleChanges): void {
      if(this.selectedSektor.id) {
        this.loadData();
      }
    }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }



  public loadData(){
    this.subscription= this.radnikService.getRadniciZaSektor(this.selectedSektor.id)
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

  public openDialog(flag:number,id?:number, brojLk?:number, ime?:string,prezime?: string,obrazovanje?:Obrazovanje, sektor?:Sektor)
  {
    const dialogRef= this.dialog.open(RadnikDialogComponent,
      { data: { id, brojLk, ime, prezime,obrazovanje,sektor } });
      dialogRef.componentInstance.flag=flag;
      if(flag===1){
        dialogRef.componentInstance.data.sektor = this.selectedSektor;
      }
    
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
