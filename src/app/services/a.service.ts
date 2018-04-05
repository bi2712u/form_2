import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';

@Injectable()
export class AService {
  usercollection:AngularFirestoreCollection<User>;
  users:Observable<User[]>;

  constructor(public afs:AngularFirestore) {
    this.usercollection = this.afs.collection('user');
    this.users = this.usercollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User
        data.id = a.payload.doc.id
        return data;
      });
    });
   }

   getUsers(){
     return this.users;
   }
   addUser(user:User){
     this.usercollection.add(user);
   }

}
