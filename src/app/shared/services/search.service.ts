import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  searchWard = new BehaviorSubject('')
  search(val:string){
    this.searchWard.next(val)
  }
}
