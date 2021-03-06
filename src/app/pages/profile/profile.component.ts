import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;
  constructor(private login: LoginService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    // this.user = this.login.getUser();
    // if (this.user == null) {
    this.login.getCurrentUser().subscribe(
      (user: any) => {
        this.user = user;
      },
      (error) => {
        this.snack.open("Error: Log in again - " + error.error.text, "", { duration: 2000, verticalPosition: "top" })
      }
    );
    //}
  }

}
