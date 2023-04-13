import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit   {
  accepted:boolean=true
  @Input() data:any
  @Input() title!:string
  
  ngOnInit():void{
    if(this.data.probability_status.split('').slice(0,2).join('')<50){
      this.accepted=false
    }
  }
}
