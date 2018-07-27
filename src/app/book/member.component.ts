import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  s: any;
  displayedColumns = ['name', 'memberType', 'email'];
  dataSource = new MemberDataSource(this.api);

  constructor(private api: MemberService) { }

  ngOnInit() {
    this.api.getMembers()
      .subscribe(res => {
        console.log(res);
        this.s = res;
      }, err => {
        console.log(err);
      });
  }
}
export class MemberDataSource extends DataSource<any> {
  constructor(private api: MemberService) {
    super()
  }

  connect() {
    return this.api.getMembers();
  }

  disconnect() {

  }
}

