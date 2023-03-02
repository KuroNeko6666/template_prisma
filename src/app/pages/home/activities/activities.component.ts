import { Component } from '@angular/core';
import { ACTIVITY_DUMP } from 'src/app/data/dump/post-activity.dump';
import { PostModel } from 'src/app/data/model/post/post.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  posts : PostModel[] = ACTIVITY_DUMP

}
