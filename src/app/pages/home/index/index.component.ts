import { Component } from '@angular/core';
import { ACTIVITY_DUMP } from 'src/app/data/dump/post-activity.dump';
import { USER_PROFILES } from 'src/app/data/dump/user-profiles.dump';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  posts = ACTIVITY_DUMP
  userProfiles = USER_PROFILES
}
