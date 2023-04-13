import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component ,Input,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { DealsService } from 'src/app/shared/services/deals.service';
import { SearchService } from 'src/app/shared/services/search.service';


@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {
  @Input() data:any[]=[]
  allData:any[]=[]
  allDatCopy:any[]=[]
  data1:object[]=[]
  data2:object[]=[]
  data3:object[]=[]
  data4:object[]=[]
  data5:object[]=[]
  titles:string[]=[ 'Potential Value', 'Focus', 'Contact Made', 'Offer Sent', 'Getting Ready']
  searchWord:string=''
  subscription1!: Subscription
  subscription2!: Subscription

  constructor(private _DealsService:DealsService , private _SearchService:SearchService ){}
  ngOnInit(): void {
    this.subscription1=this._SearchService.searchWard.subscribe({
      next:res=>{this.searchWord=res
      this.searchUpdate()
    }
    })

    this.subscription2=this._DealsService.getDeals().subscribe({
      next:res=>{
        this.allData=res.deals
        this.allDatCopy=JSON.parse(JSON.stringify(this.allData))
        this.splitDeals()
      }
    })
  }

  splitDeals(){
    this.data1=this.allData.filter((e)=>e['status']==this.titles[0])
    this.data2=this.allData.filter((e)=>e['status']==this.titles[1])
    this.data3=this.allData.filter((e)=>e['status']==this.titles[2])
    this.data4=this.allData.filter((e)=>e['status']==this.titles[3])
    this.data5=this.allData.filter((e)=>e['status']==this.titles[4]);
  }

  searchUpdate(){
    this.allData= this.allDatCopy.filter((ele:any)=>{
      if (
      ele.first_name.toLowerCase().includes(this.searchWord.toLowerCase())
      ||ele.last_name.toLowerCase().includes(this.searchWord.toLowerCase())
      ||ele.email.toLowerCase().includes(this.searchWord.toLowerCase())
      ) {
        return ele
      }
    })
    this.splitDeals()
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
      
    } else {

      this.allData= this.allData.map((e:any)=>{
        
        if (e['id']==event.previousContainer.data[event.previousIndex]['id']) {
          e['status']=this.titles[Number(event.container._dropListRef.data['id'].split('').reverse().slice(0,1).join(''))]
        }
        return e
      })
      this.splitDeals()
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()
  }
}
