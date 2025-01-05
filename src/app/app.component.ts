import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePage } from './profile-page/profile-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfilePage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular';
}
