import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  username!: string

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    this.username = authService.getLoggedUsername();
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
