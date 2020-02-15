import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Post } from '../../layouts/adminComponents/blog/blog'
import { data } from 'jquery';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  PostLists: AngularFireList<any>;

  constructor( private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
      this.PostLists = this.firebase.list('posts')

     }

     getPosts(){
       this.PostLists = this.firebase.list('posts');
       return this.PostLists.snapshotChanges();
     }
}
