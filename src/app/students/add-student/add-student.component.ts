import { User } from './../../../model/user';
import { Router } from '@angular/router';
import { UserService } from './../../../_service/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  addForm: FormGroup;
  user: User;
  ngOnInit() {
    this.addForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
      }),
      phone: new FormControl(),
      subject: new FormGroup({
        sname: new FormControl(),
        marks: new FormControl()
      })
    });
    this.addForm = this.formBuilder.group({
      id: [],

      phone: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      marks: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }
  onSubmit() {
    this.userService.createUser(this.addForm.value).subscribe(data => {
      this.router.navigate(['list-user']);
    });
  }
}
