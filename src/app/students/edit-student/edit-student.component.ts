import { Router } from '@angular/router';
import { UserService } from './../../../_service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { first } from 'rxjs/operators';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  user: User;
  editForm: FormGroup;
  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = new FormGroup({
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
    this.editForm = this.formBuilder.group({
      id: [],

      phone: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      marks: ['', Validators.required],
      subject: ['', Validators.required]
    });
    this.userService.getUserById(+userId).subscribe(data => {
      this.editForm.setValue(data);
    });
  }
  onSubmit() {
    this.userService
      .updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-user']);
        },
        error => {
          alert(error);
        }
      );
  }
}
