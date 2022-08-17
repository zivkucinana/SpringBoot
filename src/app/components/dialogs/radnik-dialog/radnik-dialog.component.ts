import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Obrazovanje } from 'src/app/models/obrazovanje';
import { Radnik } from 'src/app/models/radnik';
import { ObrazovanjeService } from 'src/app/services/obrazovanje.service';
import { RadnikService } from 'src/app/services/radnik.service';

@Component({
  selector: 'app-radnik-dialog',
  templateUrl: './radnik-dialog.component.html',
  styleUrls: ['./radnik-dialog.component.css']
})
export class RadnikDialogComponent implements OnInit ,OnDestroy{

  public flag!: number;
  obrazovanja! :Obrazovanje[];
  subscription!: Subscription;

  constructor(private snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<RadnikDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Radnik,
    public radnikService:RadnikService,
    public obrazovanjeService: ObrazovanjeService ) { }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    ngOnInit(): void {
      this.subscription = this.obrazovanjeService.getAllObrazovanje().subscribe(data => {
        this.obrazovanja = data;
      });
    }

    compare(a:any, b: any) {
      return a.id == b.id;
    }

  public add() : void {
    this.radnikService.addRadnik(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodat radnik!','OK', {duration: 2500} );
    }, 
    (error: Error) => {
      this.snackBar.open('Došlo je do greške!', 'Zatvori', {duration:2500});
    }
    );
  }

  public update() : void {
    this.radnikService.updateRadnik(this.data).subscribe(() => {
      this.snackBar.open('Uspešno izmenjen radnik!','OK', {duration: 2500} );
    }, 
    (error: Error) => {
      this.snackBar.open('Došlo je do greške!', 'Zatvori', {duration:2500});
    }
    );
  }

  public delete() : void {
    this.radnikService.deleteRadnik(this.data.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisan radnik!','OK', {duration: 2500} );
    }, 
    (error: Error) => {
      this.snackBar.open('Došlo je do greške!', 'Zatvori', {duration:2500});
    }
    );
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.', 'Zatvori', {duration:1000});
  }







}
