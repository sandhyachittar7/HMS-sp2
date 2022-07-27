import { Component, Inject, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.styl']
})
export class ParentComponent implements OnInit {

  constructor(@Inject(StatusService) public status) { }
  UserName;
  ngOnInit(): void {
    if (localStorage.getItem("username"))
      this.UserName=localStorage.getItem("username");
  }

}
