import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Post } from '../../layouts/adminComponents/blog/blog'
import { data } from 'jquery';
import {map} from 'rxjs/operators/map';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postsCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>

  constructor( private firebase: AngularFirestore,
   ) {
      this.postsCollection = this.firebase.collection('posts', ref =>
        ref.orderBy('published','desc')
      )

     }

     getPosts(){
      return this.postsCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post
          const id = a.payload.doc.id
          return { id, ...data }
        })
      }))
  
     }

    //  getPostData(id: string){
    //    this.postDoc = this.firebase.doc<Post>('posts/${id}')
    //    return this.postDoc.valueChanges()
    //  }

     getPostData(id: string) {
      this.postDoc = this.firebase.doc<Post>(`posts/${id}`)
      return this.postDoc.valueChanges()
    }

    getPost(id: string) {
      return this.firebase.doc<Post>(`posts/${id}`)
    }
  
    create(data: Post) {
      this.postsCollection.add(data)
    }
  
    delete(id: string) {
      return this.getPost(id).delete()
    }
  
    update(id: string, formData) {
      return this.getPost(id).update(formData)
    }
  
  
}
