import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogService } from 'app/shared/services/blog.service';

const routes: Routes = [
  { path: 'systemAdmin/blog-posts',   component: BlogListComponent },
{ path: 'systemAdmin/blog:id', component: ArticlesComponent },
{ path: 'systemAdmin/blogAdd', component:BlogPostsComponent }

]



@NgModule({
  declarations: [BlogListComponent,ArticlesComponent,BlogPostsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  providers: [BlogService]
})
export class BlogModule { }
