import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-stage-card',
  templateUrl: './stage-card.component.html',
  styleUrls: ['./stage-card.component.scss']
})
export class StageCardComponent {


  @Input() data:object[]=[]
  @Input() title!:string

}
