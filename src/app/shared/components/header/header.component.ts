import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/components/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private layoutservice: LayoutService) { }

  ngOnInit(): void {
  }

  sidebarToggle(): void {
    this.layoutservice.sidebarToggleSubj.next();
  }

}
