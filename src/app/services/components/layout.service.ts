import { Injectable } from '@angular/core';

import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  sidebarToggleSubj: Subject<boolean> = new Subject();

  constructor() { }

}
