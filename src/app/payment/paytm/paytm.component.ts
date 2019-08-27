import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-paytm',
  templateUrl: './paytm.component.html',
  styleUrls: ['./paytm.component.scss']
})
export class PaytmComponent implements OnInit {

  smart;
  constructor(
    private device: DeviceDetectorService
  ) { }

  ngOnInit() {
    if(this.device.isMobile() || this.device.isTablet() ){
      this.smart=true;
    }else{
      this.smart=false;
    }
  }
  pay(){
    window.open("http://m.p-y.tm/requestPayment?recipient=9452600054&amount=600");
  }

}
