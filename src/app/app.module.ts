import { UserService } from './../_service/user.service';
import { routing } from './routes';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [BrowserModule, routing, ReactiveFormsModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
