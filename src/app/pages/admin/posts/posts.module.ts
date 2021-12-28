import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsRoutingModule } from './posts-routing.module';


@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [
    CommonModule, PostsRoutingModule
  ]
})
export class PostsModule { }
