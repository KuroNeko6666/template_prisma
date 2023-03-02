import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent {
  @Input() name?: string
  @Input() image_url?: string
  @Input() job?: string
  @Input() following?: number
  @Input() followers?: number
  @Output() viewProfile = new EventEmitter()

  emitViewProfile() : void{
    this.viewProfile.emit()
  }
}
