import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor( private auth: AuthService) { }

  userStatus = this.auth.userStatus;

  logout(){
    this.auth.logout();
  }

  ngOnInit() {
   
  }

}
