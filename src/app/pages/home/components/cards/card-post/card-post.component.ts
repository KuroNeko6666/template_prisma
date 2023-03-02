import { Component, Input } from '@angular/core';
import { PostModel } from 'src/app/data/model/post/post.model';

@Component({
  selector: 'card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {

  @Input() data?: PostModel
  viewMore: boolean = false

  viewMoreToggle(){
    this.viewMore = !this.viewMore
  }

}
