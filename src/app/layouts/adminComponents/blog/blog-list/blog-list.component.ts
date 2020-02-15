import { Component, OnInit } from '@angular/core';
import { BlogService } from 'app/shared/services/blog.service';
import { MatDialog } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { Post } from '../blog';
import { Observable } from 'rxjs';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  posts: Observable<Post[]>

  constructor(
    private service: BlogService,
    public auth: AuthService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.posts = this.service.getPosts()
    
  }

  delete(id: string){
    this.service.delete(id)
  }

}
