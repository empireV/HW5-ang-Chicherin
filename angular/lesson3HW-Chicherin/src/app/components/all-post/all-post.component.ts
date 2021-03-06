import {Component, Input, OnInit} from '@angular/core';
import {Ipost} from '../../models/opost';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  @Input()
  posts: Ipost[];

  // constructor(private postService: PostService) {
  //   this.postService.getPosts().subscribe(value => this.posts = value);
  // }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.data);
  }

  ngOnInit(): void {
  }

}
