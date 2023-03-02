import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.css']
})
export class CardBasicComponent {
  @Input() title? : string
  @Input() menu? : string

}
