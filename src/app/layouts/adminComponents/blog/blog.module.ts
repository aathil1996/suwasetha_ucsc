import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogService } from 'app/shared/services/blog.service';

const routes: Routes = [
  { path: 'blog-posts',   component: BlogListComponent },
{ path: 'blog-posts:id', component: ArticlesComponent },
{ path: 'blogAdd', component:BlogPostsComponent }

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  providers: [BlogService]
})
export class BlogModule { }
