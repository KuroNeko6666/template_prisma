import { Component } from '@angular/core';
import { ACTIVITY_DUMP } from 'src/app/data/dump/post-activity.dump';
import { PostModel } from 'src/app/data/model/post/post.model';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent {

  posts : PostModel[] = ACTIVITY_DUMP


}
