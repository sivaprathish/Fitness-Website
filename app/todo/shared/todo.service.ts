import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'; 
import{ AngularFireStorage } from '@angular/fire/compat/storage'; 
import { Student } from '../model/model/student';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }
   addStudent(Student: Student){
    Student.id = this.afs.createId();
    return this.afs.collection('/Students').add(Student);
   }
   getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  // delete student
  deleteStudent(student : Student) {
     this.afs.doc('/Students/'+student.id).delete();
  }

  // update student
  updateStudent(student : Student) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
}
