import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TikGaming';
  constructor(private route:Router){

  }
  gotohome(){
    this.route.navigate(['/home']);
  }
}
