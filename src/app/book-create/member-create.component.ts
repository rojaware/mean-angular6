import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {

  memberForm: FormGroup;
  name: string = '';
  memberType: string = '';
  email: string = '';
  education: string = '';
  career: string = '';
  birthYear: string = '';

  constructor(private router: Router, private api: MemberService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.memberForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'memberType': [null, Validators.required],
      'email': [null, Validators.required],
      'education': [null, Validators.required],
      'career': [null, Validators.required],
      'birthYear': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postMember(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/member-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
