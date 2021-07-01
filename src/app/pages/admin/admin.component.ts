import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isLoggedIn = this.auth.isLoggedIn;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
