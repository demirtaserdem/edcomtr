import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from 'src/app/services/components/layout.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {
  sidebarOpened: boolean = false;
  subscription: Subscription;

  constructor(private layoutservice: LayoutService) { }

  ngOnInit(): void {
    this.subscription= this.layoutservice.sidebarToggleSubj.subscribe(
      () => {
        this.sidebarOpened = !this.sidebarOpened;
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
