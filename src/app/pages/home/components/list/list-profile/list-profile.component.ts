import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfileModel } from 'src/app/data/model/user/user-profile.model';


@Component({
  selector: 'list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent {
  @Input() data?: UserProfileModel[]
  @Output() view = new EventEmitter<number>()
  @Output() follow = new EventEmitter<number>()

  viewEmit(id: number){
    this.view.emit(id)
    console.log("view");

  }

  followEmit(id: number, event : Event){
    event.stopPropagation()
    this.follow.emit(id)
    console.log("follow");

  }
}
