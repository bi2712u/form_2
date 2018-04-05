import { Component, OnInit } from '@angular/core';
import { AService } from '../../services/a.service';
import { User } from '../../user';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  submitted = false;

  user:User={
    username:'',
    password:''
  }

  constructor(private aService:AService) { }
  
  ngOnInit() {
  }

  onSubmit(){
    if(this.user.username !='' && this.user.password !=''){
      this.aService.addUser(this.user);
      this.user.username='';
      this.user.password='';
      this.submitted = true;
    }
  }

}
