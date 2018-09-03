import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
const routes: Routes = [
  { path: 'add-user', component: AddStudentComponent },
  { path: 'list-user', component: StudentsComponent },
  { path: 'edit-user', component: EditStudentComponent },
  { path: '', component: StudentsComponent }
];

export const routing = RouterModule.forRoot(routes);
