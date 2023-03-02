import { Component, Input } from '@angular/core';
import { PostModel } from 'src/app/data/model/post/post.model';

@Component({
  selector: 'list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {

  @Input() data?: PostModel[]

}
