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

  constructor( private apiService: HeroServiceService) {}

  ngOnInit() {
    try {
      this.apiService.getAllUsers().subscribe(
        data => {this.ReceivingData(data); },
        error => {console.error(error); }
      );
    } catch (error) {
      console.error(error);
    }
  }

  ReceivingData(data) {
    this.users = data;
  }

}
