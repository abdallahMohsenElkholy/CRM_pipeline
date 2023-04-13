import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from './shared/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRM_pipeline';
  toppings1 = new FormControl('');
  toppings2 = new FormControl('');
  toppings3 = new FormControl('');

  toppingList1: string[] = ['Segment A', 'Segment B', 'Segment C'];
  toppingList2: string[] = ['Assignee A', 'Assignee B', 'Assignee C'];
  toppingList3: string[] = ['Status A', 'Status B', 'Status C'];

  emailFormControl = new FormControl();
  constructor(private _SearchService:SearchService){}


search(val:any){
  this._SearchService.search(val.target.value)

}
}
