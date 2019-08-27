import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [];
  @ViewChild('homeimg') homeimg;
  public innerWidth: any;
  constructor(private route: Router) { }
  ngOnInit() {
    this.images.push(
      'assets/homeimg/mbimg.jpg',
      'assets/homeimg/pcimg.jpg'
    );
    // console.log(this.images);
    this.innerWidth = window.innerWidth;
    if(innerWidth<590){
      //set mobile image
      this.homeimg.nativeElement.src=this.images[0];
    }else{
      //set pc image
      this.homeimg.nativeElement.src=this.images[1];
    }

 }
 
@HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  // console.log(this.innerWidth);
  if(innerWidth<590){
    //set mobile image
    this.homeimg.nativeElement.src=this.images[0];
  }else{
    //set pc image
    this.homeimg.nativeElement.src=this.images[1];
  }
}

gotoevolve(){
  window.location.href = 'https://evolvegaming.business.site';
}
gotocsreg(){
  this.route.navigate(['/register','csgo']);

}
gotor6reg(){
  this.route.navigate(['/register','r6']);
}
gotogadetzone(){
  window.location.href = 'https://goo.gl/maps/uMxo2Y6SJFS2';
}

gotoamigo(){
  window.location.href = 'https://goo.gl/maps/vco22koDPBz';
}
gotomom(){
  window.location.href = 'https://moms-place-restaurant.business.site/';
}
gotobenq(){
  window.location.href = 'https://www.benq.com/en-in/index.html';
}
gotomd(){
  window.location.href = 'https://mdcomputers.in/';
}

}
  
