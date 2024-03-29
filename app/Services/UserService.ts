import {Injectable} from '@angular/core';
import { observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { ImplicitReceiver } from '@angular/compiler';
import { User } from '../Models/User.model';


const httpOptions ={headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class UserService{

    url='http:https://localhost:44318/api/User'

    constructor(private http:HttpClient) {
                
    }

    add(u:User){
        return this.http.post(`${this.url}/Add`,u,httpOptions);
    }
}
