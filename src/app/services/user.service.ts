import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './../model/user';

@Injectable()
export class UserService {
   
    baseUrl = "assets/data/"; //here will be your api link. here i have used demo link ;



    constructor(public http:HttpClient) { }
    
    // you can also define the obserable and other object . it is also a example
    // getUsers(): Observable<User[]>{        
    //     return this.http.get<User[]>(this.baseUrl + 'users.json');
    // }

    getUsers(){
        return this.http.get(this.baseUrl + 'users.json');
    }
    addUser(user:User){
        let url = this.baseUrl + '/add';
        return this.http.post(url, user);  // return this.http.post<any>(url, user);
    }
    updateUser(user:User){
        let url = this.baseUrl + '/update/'+ user.id;
        let body = user;
        return this.http.post(url, body);  
    }
    deleteUser(id:number){
        let url = this.baseUrl + '/delete/'+ id;
        let body ={ id: id };
        return this.http.post(url, body);  
    }
   

    // I am here post method to update and delete, But you can use  PUT an DELETE method to update and delete repectively.
} 