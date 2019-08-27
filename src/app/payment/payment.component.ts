import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  fifaPrice:number;
  csgoPrice:number;
  r6Price:number;
  constructor(private activeRoute:ActivatedRoute ,private route:Router) { }

  ngOnInit() {
    this.csgoPrice=500;
    this.fifaPrice=200;
    this.r6Price=500;
  }
  onClick(price:string){
    if(price == '500'){
      // console.log("price is 500");
      this.route.navigate(['/pay','paytm'],{
        queryParams:{price:'500'}
      });
    }
    if(price == '600'){
      // console.log("price is 600");
      this.route.navigate(['/pay','paytm'],{
        queryParams:{price:'600'}
      });
    }

  }
}
