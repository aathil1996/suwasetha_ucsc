import { Component, OnInit } from '@angular/core';
import { Post } from 'app/layouts/adminComponents/blog/blog';
import { Observable } from 'rxjs';
import { BlogService } from 'app/shared/services/blog.service';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss',
]
})
export class BlogComponent implements OnInit {

  posts: Observable<Post[]>
  constructor(
    private service: BlogService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.posts = this.service.getPosts()
  }

  delete(id: string){
    this.service.delete(id)
  }

}
