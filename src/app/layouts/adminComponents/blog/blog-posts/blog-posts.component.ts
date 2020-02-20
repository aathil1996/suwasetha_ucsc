import { Component, OnInit } from '@angular/core';
import { Post } from '../blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'app/shared/services/blog.service';
import { AuthService } from 'app/shared/services/auth.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {
  
  title: string
  image: string = null
  content: string

  buttonText: string = "Create Post"

  uploadPercentage: Observable<number>
  downloadURL: Observable<string>

  constructor(
    private service: BlogService,
    private auth: AuthService,
    private storage: AngularFireStorage,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  createPost(){
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserID,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    this.service.create(data)
    this.image = ''
    this.title = ''
    this.content = ''
    
    
  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);
      this.uploadPercentage = task.percentageChanges();
      console.log('Image uploaded!');
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL()
          this.downloadURL.subscribe(url => (this.image = url));
        })
      )
      .subscribe();
    }
  }

  

}
