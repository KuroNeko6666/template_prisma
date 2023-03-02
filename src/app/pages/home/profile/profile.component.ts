import { Component } from '@angular/core';
import { ACTIVITY_DUMP } from 'src/app/data/dump/post-activity.dump';
import { PostModel } from 'src/app/data/model/post/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  posts : PostModel[] = ACTIVITY_DUMP

}
