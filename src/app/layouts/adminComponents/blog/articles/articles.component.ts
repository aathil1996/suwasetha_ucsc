import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'app/shared/services/blog.service';
import { Post } from '../blog';
import { AuthService } from 'app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  post: Post
  editing: boolean = false
  constructor(

    private route: ActivatedRoute,
    private service: BlogService,
    private router: Router,
    public auth: AuthService,
    private toastr: ToastrService


  ) { }

  ngOnInit() {
    this.getPost()
    console.log(this)
  }

  // getPost(){
  //   const id = this.route.snapshot.paramMap.get('id')
  //   return  this.service.getPostData(id).subscribe(data => (this.post = data))
  // }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id')
    return this.service.getPostData(id).subscribe(data => this.post = data)
  }

  updatePost(){
    const formData = {
      title: this.post.title,
      content: this.post.content
    };
    const id = this.route.snapshot.paramMap.get('id')
    this.service.update(id,formData)
    this.toastr.success("Post Updated")
    this.editing = false;
  }

  delete(){
    const id = this.route.snapshot.paramMap.get('id')
    this.service.delete(id)
    this.toastr.error("Post Deleted")
    this.router.navigate(['systemAdmin/systemAdmin/blog-posts'])
  }


}
