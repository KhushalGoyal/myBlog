import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialog } from './login-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(public dialog: MatDialog) {
  }

 
  openDialog(): void {
    console.log("Hello")
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
