import { Component } from '@angular/core';
import { ACTIVITY_DUMP } from 'src/app/data/dump/post-activity.dump';
import { USER_PROFILES } from 'src/app/data/dump/user-profiles.dump';
import { PostModel } from 'src/app/data/model/post/post.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  posts : PostModel[] = ACTIVITY_DUMP
  userProfiles = USER_PROFILES



}
