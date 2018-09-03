import { User } from './../../model/user';
import { UserService } from './../../_service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}
  students: User[];
  studentList = [];
  isAggregate = false;
  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.students = [...data];
      this.studentList = [...data];
    });
  }

  onClickAggregation() {
    this.isAggregate = true;
    this.studentList = [];

    const sList = [...this.students];
    let curIndex = 0;
    sList.forEach(a => {
      curIndex = this.studentList.findIndex(
        i => i.fullname === a.name.first + ' ' + a.name.last
      );
      const currobj = { ...a };

      if (curIndex === -1) {
        currobj['fullname'] = currobj.name.first + ' ' + currobj.name.last;
        this.studentList = [...this.studentList, currobj];
      } else {
        this.studentList[curIndex].subject.marks += currobj.subject.marks;
      }
    });
  }

  onClickBack() {
    this.isAggregate = false;
    this.ngOnInit();
  }
}
