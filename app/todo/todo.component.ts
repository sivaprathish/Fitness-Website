import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/todo/model/model/student';
import { TodoService } from 'src/app/todo/shared/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    todo: ''
    
  };
  id: string = '';
  todo: string = '';
  
  constructor(private Todo:TodoService) { }

  ngOnInit(): void { this.getAllStudents();
  }
  getAllStudents() {

    this.Todo.getAllStudents().subscribe(res => {

      this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }

  resetForm() {
    this.id = '';
    this.todo = '';
    
  }

  addStudent() {
    if (this.todo == '' ) {
      alert('Fill all input fields');
      return;
    }

    this.studentObj.id = '';
    this.studentObj.todo = this.todo;
    

    this.Todo.addStudent(this.studentObj);
    this.resetForm();

  }

  updateStudent() {

  }

  deleteStudent(student: Student) {
    if (window.confirm('Are you done the work ????? ' )) {
      this.Todo.deleteStudent(student);
    }
  }

}
