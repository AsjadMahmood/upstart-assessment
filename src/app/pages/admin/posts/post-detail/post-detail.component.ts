import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { IPost } from 'src/app/models/posts.interface';
import { User } from 'src/app/models/users.interface';
import { PostsService } from 'src/app/services/posts/posts.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postId: string | null = '';
  destroy = new Subject<void>();
  postDetail: IPost = { userId: 0, id: 0, title: '', body: '' }
  postUser : Partial<User> = {};

  constructor(private route: ActivatedRoute, private postsService: PostsService, private usersService: UsersService,) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.getPostDetail();
  }

  getPostDetail() {
    if (this.postId) {
      this.postsService.getPostById(+this.postId)
        .pipe(mergeMap((res: any) => {
          this.postDetail = res;
          return this.usersService.getUserById(this.postDetail.userId)
        }),
        ).pipe(takeUntil(this.destroy))
        .subscribe((res2 : Partial<User>) => {
          this.postUser = res2;
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}