import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { UserService } from './../../services/user.service';

import { User } from './../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  sub:Subscription;
  //users:any = [];
  users:User[] = [];
  //user: any = { id:0, firstName:"", lastName:"", email:""};
  user: User = { id:0, firstName:"", lastName:"", email:""};
  editFlag = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.getUser();      
  }

  onAddUserSubmit() {
    //alert(JSON.stringify(this.user))
    if(this.editFlag == false){
        this.sub = this.userService.addUser(this.user).subscribe((data : any)=>{
          if(data.success){
            this.getUser();
          }
          else{
            console.log("Failed");
          }        
        });
    }
    else{

      this.sub = this.userService.updateUser(this.user).subscribe((data : any)=>{
        if(data.success){
          this.getUser();
          this.resetForm();
        }
        else{
          console.log("Failed");
        }        
      });
    }
    
  }

  onEditUser(id:number, pUser:User){
      this.user = pUser;   
      this.editFlag = true;   
  }

  onDeleteUser(pId:number){

    this.sub = this.userService.deleteUser(pId).subscribe((data : any)=>{
          if(data.success){
            this.getUser();
          }
          else{
            console.log("Failed");
          }        
      });
  }

  resetForm(){
    this.user = { id:0, firstName:"", lastName:"", email:""};
    this.editFlag = false;
  } 

  ngOnDestroy() {
      this.sub.unsubscribe();
      // need to unsubscribe of subscription of obserable to avoid memory leak. it's good practice
  }

  private getUser(){
      
      // this.sub = this.userService.getUsers().subscribe((data : any)=>{
      //   this.users = data;
      // });

      this.sub = this.userService.getUsers().subscribe((data : User[])=>{
        this.users = data;
      });

  }



}
