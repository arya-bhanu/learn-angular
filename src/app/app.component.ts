import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ProfileUserComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular';
}
