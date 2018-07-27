import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member = {};
  constructor(private route: ActivatedRoute, private api: MemberService, private router: Router) { }

  ngOnInit() {
    this.getMemberDetails(this.route.snapshot.params['id']);
  }

  getMemberDetails(id) {
    this.api.getMember(id)
      .subscribe(data => {
        console.log(data);
        this.member = data;
      });
  }
  deleteMember(id) {
    this.api.deleteMember(id)
      .subscribe(res => {
        this.router.navigate(['/members']);
      }, (err) => {
        console.log(err);
      }
      );
  }
}
