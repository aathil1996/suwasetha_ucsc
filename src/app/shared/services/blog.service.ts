import { Injectable } from '@angular/core';
import { Post } from '../../layouts/adminComponents/blog/blog'
import {map} from 'rxjs/operators/map';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postsCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>

  constructor( private firebase: AngularFirestore,
    private notification: NotificationsService,
    private router: Router,
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
      this.postsCollection.add(data);
      this.notification.success("Post Created")
      // this.toastr.success("Post Created");
      this.router.navigate(['systemAdmin/systemAdmin/blog-posts']);
    }
  
    delete(id: string) {
      return this.getPost(id).delete();
    }
  
    update(id: string, formData) {
      return this.getPost(id).update(formData);
      this.notification.success("Post Updated")
     
    }
  
  
}
