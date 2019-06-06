import { Component, OnInit } from '@angular/core';
import { User } from '../../../services/classes/user.class';
import { HeroServiceService } from '../../services/hero-service.service';
// import {MatCardModule, MatButtonModule} from '@angular/material/';

@Component({
  selector: 'app-panel',
  templateUrl: './app-panel.component.html',
  styleUrls: ['./app-panel.component.css']
})
export class AppPanelComponent implements OnInit {

  private users: Array<User> = [];
  private pageInUse = 1;
  private selectedUser: User;

  constructor( private apiService: HeroServiceService) {}

  ngOnInit() {
    this.RequestingData();
  }

  pageUp() {
    this.pageInUse++;
    this.RequestingData();
  }

  pageDwn() {
    if (this.pageInUse > 1) {
      this.pageInUse--;
      this.RequestingData();
    }
  }

  private RequestingData() {
    try {
      this.apiService.getUserPage(this.pageInUse).subscribe(
        data => {this.ReceivingData(data); },
        error => {console.error(error); }
      );
    } catch (error) {
      console.error(error);
    }
  }

  selectUser(user) {
    this.selectedUser = user;
  }

  ReceivingData(data) {

    this.users = data;
  }

}
