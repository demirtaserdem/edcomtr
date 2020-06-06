import { Component, OnInit } from '@angular/core';
import * as footerIcons from "./footerIcons"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  today:Date;
  socialArray:Array<any>;

  constructor() {
    this.today = new Date();
    this.socialArray=footerIcons.socialArray;
   }

  ngOnInit(): void {
  }

}
