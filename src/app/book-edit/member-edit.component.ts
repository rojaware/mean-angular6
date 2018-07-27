import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  memberForm: FormGroup;
  id: string = '';
  name: string = '';
  memberType: string = '';
  education: string = '';
  career: string = '';
  email: string = '';
  birthYear: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: MemberService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getMember(this.route.snapshot.params['id']);
    this.memberForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'memberType': [null, Validators.required],
      'email': [null, Validators.required],
      'education': [null, Validators.required],
      'career': [null, Validators.required],
      'birthYear': [null, Validators.required]
    });
  }

  getMember(id) {
    this.api.getMember(id).subscribe(data => {
      this.id = data._id;
      this.memberForm.setValue({
        name: data.name,
        memberType: data.memberType,
        email: data.email,
        education: data.education,
        career: data.career,
        birthYear: data.birthYear
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateMember(this.id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/member-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

  memberDetails() {
    this.router.navigate(['/member-details', this.id]);
  }
}
