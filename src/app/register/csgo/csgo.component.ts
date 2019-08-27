import { Component, OnInit,Output, EventEmitter ,ViewChild, OnDestroy } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { MatSnackBar } from '@angular/material';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.scss']
})
export class CsgoComponent implements OnInit {
  @ViewChild('csForm') csgoForm;
  constructor
  ( 
    private activeRoute:ActivatedRoute,
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private db: AngularFireDatabase,
    private route:Router
  )
     { }
     itemsRef = this.db.list('reg');
     LoginSub:Subscription;
     userLogin;
     tname:string='';
     p1:string='';
     p1rank:string='';
     p2:string='';
     p2rank:string='';
     p3:string='';
     p3rank:string='';
     p4:string='';
     p4rank:string='';
     p5:string='';
     p5rank:string='';
     phone:number=0;
     userName:string='';
  ngOnInit() {
    this.userLogin=false;
    this.LoginSub=this.afAuth.user.subscribe(
      (user)=>{
        if(user){
          this.userName=user.displayName;
          console.log("Hello "+user.displayName.toUpperCase());
          // console.log("user is logged in");
          this.userLogin=true;
        }
      }
    )
  
  }
  onSubmit(csForm:NgForm){
    // console.log(csForm);
    if(this.userLogin){
      this.tname=this.csgoForm.value.teamname;
      this.p1rank=this.csgoForm.value.p1rank;
      this.p2rank=this.csgoForm.value.p2rank;
      this.p3rank=this.csgoForm.value.p3rank;
      this.p4rank=this.csgoForm.value.p4rank;
      this.p5rank=this.csgoForm.value.p5rank;
      this.phone=this.csgoForm.value.phone;
      this.p1=this.csgoForm.value.p1;
      this.p2=this.csgoForm.value.p2;
      this.p3=this.csgoForm.value.p3;
      this.p4=this.csgoForm.value.p4;
      this.p5=this.csgoForm.value.p5;
      // console.log(this.p1);
      // console.log(this.p2);
      // console.log(this.p3);
      // console.log(this.p4);
      // console.log(this.p5);
      // console.log(this.p1rank);
      // console.log(this.p2rank);
      // console.log(this.p3rank);
      // console.log(this.p4rank);
      // console.log(this.p5rank);
      // console.log(this.phone);
      // console.log(this.userName);
      this.itemsRef.push({
        game: 'csgo',
        TeamName: this.tname,
        LoginName: this.userName,
        TeamLeader: this.p1,
        TeamLeaderRank: this.p1rank,
        phone:this.phone,
        player2:this.p2,
        player2rank:this.p2rank,
        player3:this.p3,
        playerrank:this.p3rank,
        player4:this.p4,
        player4rank:this.p4rank,
        player5:this.p5,
        player5rank:this.p5rank
      });
      // itemsRef.push({ name: newName });
      this.openSnackBar('Registration Completed','');
      this.route.navigate([
        '/pay/paytm',
        {queryparms:{
          price:'600'
        }}
      ]);
      this.csgoForm.reset();
    }
      

  }
  login(){
    // this.afAuth.auth
    // .signInWithPopup(new auth.GoogleAuthProvider())
    // .then(
    //   ()=>{
    //     this.openSnackBar('Sign In Completed Successfully','');
    //   }
    // )
    // .catch(
    //   err => {
    //     this.openSnackBar(err.message,'');
    //   }
    // )
    this.openSnackBar('Sorry Registration Has been Closed Contact On The Number Provided','');
}
ngOnDestroy(){
  this.afAuth.auth.signOut().then(
    ()=>{
      // console.log("user is logged out");
      this.userLogin=false;
    }
  )
  this.LoginSub.unsubscribe();
}
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}
checkValid(){
  if( this.csgoForm.valid && this.userLogin){
    return true;
  }else{
    return false;
  }
}

}
