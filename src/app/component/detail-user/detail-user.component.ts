import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { User } from '../../../services/classes/user.class';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnChanges {

  @Input() user: User;
  userprops: Array<String>;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.user)  {
      this.userprops = Object.getOwnPropertyNames(this.user);
    }
  }
}
