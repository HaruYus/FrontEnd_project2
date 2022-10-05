import { Component } from '@angular/core';
import { AuthService } from './accounts/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2-angular';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  retrieveIsUserLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

}

