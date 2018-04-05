import { Component, OnInit } from '@angular/core';
import { AService } from '../../services/a.service';
import { User } from '../../user';

@Component({
  selector: 'app-login-in-form',
  templateUrl: './login-in-form.component.html',
  styleUrls: ['./login-in-form.component.css']
})
export class LoginInFormComponent implements OnInit {

  submitted = false;
  errorstate = false;
  user:User={
    username:'',
    password:''
  }

  users:User[];

  constructor(private aService:AService) { }

  ngOnInit() {
    this.aService.getUsers().subscribe(users => {
      //console.log(users);
      this.users = users;
    })
  }

  keyUsername(keyusername:string){
    this.user.username = keyusername;
  }
  keyPassword(keypassword:string){
    this.user.password = keypassword;
  }

  onSubmit(){
    this.users.forEach(a => {
      if(this.user.username == a.username && this.user.password == a.password){
          this.submitted = true;
          this.errorstate = false;        
      }
      if(this.user.username == a.username && this.user.password != a.password){
        this.submitted = false;
        this.errorstate = true;
      }
    })
  }
}
