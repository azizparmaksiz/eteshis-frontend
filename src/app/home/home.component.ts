import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private autService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  logOut() {
    this.autService.logout();
    this.router.navigate(['login']);
  }

}