import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/users.interface';
import { PostsService } from 'src/app/services/posts/posts.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: string | null = '';
  userDetail: Partial<User> = {};
  destroy = new Subject<void>();

  constructor(private route: ActivatedRoute, private postsService: PostsService, private usersService: UsersService,) { }

  // For the Optional Part
  // I would get posts from the request i.e. (https://jsonplaceholder.typicode.com/posts) (as said in assessment)
  // and then have a function name => findByUserId() 
  // in this function i would iterate the post and mantain a counter which will be added whenever the post is found. 

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getUserDetail();
  }

  getUserDetail() {
    if (this.userId) {
      this.usersService.getUserById(+this.userId).pipe(takeUntil(this.destroy))
        .subscribe((res:Partial<User>) => {
          this.userDetail = res;
        })
    }
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}