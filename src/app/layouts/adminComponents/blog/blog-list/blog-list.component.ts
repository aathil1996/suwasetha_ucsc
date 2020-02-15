import { Component, OnInit } from '@angular/core';
import { BlogService } from 'app/shared/services/blog.service';
import { MatDialog } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { Post } from '../blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(
    private service: BlogService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.service.getPosts().subscribe(
      list => {
        let array = list.map(item =>{
          return{
  
            key: item.key as unknown as Post,
            ...item.payload.val()

          };
        })
      }
    )
  }

}
