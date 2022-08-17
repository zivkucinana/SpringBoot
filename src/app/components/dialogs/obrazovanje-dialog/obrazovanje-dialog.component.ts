import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Obrazovanje } from 'src/app/models/obrazovanje';
import { ObrazovanjeService } from 'src/app/services/obrazovanje.service';

@Component({
  selector: 'app-obrazovanje-dialog',
  templateUrl: './obrazovanje-dialog.component.html',
  styleUrls: ['./obrazovanje-dialog.component.css']
})
export class ObrazovanjeDialogComponent implements OnInit {

public flag!:number;

  constructor(public snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<ObrazovanjeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Obrazovanje,
    public obrazovanjeService:ObrazovanjeService
    
    
    ) { }

  ngOnInit(): void {
  }

  public add() : void {
    this.obrazovanjeService.addObrazovanje(this.data).subscribe(() => {
      this.snackbar.open('Uspešno dodato obrazovanje!','OK', {duration: 2500} );
    }, 
    (error: Error) => {
      this.snackbar.open('Došlo je do greške!', 'Zatvori', {duration:2500});
    }
    );
  }

  public update() : void {
    this.obrazovanjeService.updateObrazovanje(this.data).subscribe(() => {
      this.snackbar.open('Uspešno izmenjeno obrazovanje!','OK', {duration: 2500} );
    }, 
    (error: Error) => {
      this.snackbar.open('Došlo je do greške!', 'Zatvori', {duration:2500});
    }
    );
  }

  public delete() : void {
    this.obrazovanjeService.deleteObrazovanje(this.data.id).subscribe(() => {
      this.snackbar.open('Uspešno obrisano obrazovanje!','OK', {duration: 2500} );
    }, 
    (error: Error) => {
      this.snackbar.open('Došlo je do greške!', 'Zatvori', {duration:2500});
    }
    );
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackbar.open('Odustali ste od izmena.', 'Zatvori', {duration:1000});
  }

}
