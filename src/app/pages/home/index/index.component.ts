import { Component } from '@angular/core';
import { ACTIVITY_DUMP } from 'src/app/data/dump/post.dump';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  activity = ACTIVITY_DUMP
}
