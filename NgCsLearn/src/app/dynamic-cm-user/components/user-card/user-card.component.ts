import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(private profileService: ProfileService) {}

  logout() {
    this.profileService.logout();
  }

  ngOnInit(): void {
  }

}
