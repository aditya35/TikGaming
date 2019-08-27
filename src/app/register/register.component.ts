import { Component, OnInit , ViewChild, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {
  @ViewChild('game') GameSelect;
  constructor(
    private route:Router ,
    private activeRoute:ActivatedRoute,
    ) { }
  gameMode='';

  ngOnInit() {
    // console.log(this.GameSelect);
    this.checkGame();

  }
  gameLink(game:string){
    if(game == ''){
      return;
    }
    switch(game){
      case 'csgo': 
        this.route.navigate(['register','csgo']);
        break;
      case 'r6': 
        this.route.navigate(['register','r6']);
        break;
    }
  }
  checkGame(){
     if(this.activeRoute.children.length>0){
      switch (this.activeRoute.firstChild.routeConfig.path){
        case 'r6':
          this.GameSelect.value = 'r6';
          break;
        case 'csgo':
          this.GameSelect.value = 'csgo';
          break;
      }
    }else{
      this.GameSelect.value = '';
    }
    
  }
  

}
