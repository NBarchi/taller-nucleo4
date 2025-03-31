import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, docData, Firestore, getDoc, getDocs, setDoc } from '@angular/fire/firestore';
import { Course } from '../../types/course';
import { merge, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private firestore: Firestore) { }

  getCourses(): Observable<Course[]>{
    const courseRef = collection(this.firestore, "courses");
    return collectionData(courseRef) as Observable<Course[]>;
  }

  getCourse(id: number): Observable<Course>{
    const courseRef = doc(this.firestore, "courses", id.toString());
    return docData(courseRef) as Observable<Course>;
  }

  addCourse(course: Course){
    const coursesRef = collection(this.firestore, "courses");
    return getDocs(coursesRef).then(snapshot => {
      const maxId = snapshot.docs.reduce((max, course) => Math.max(max, Number(course.id)), 0);
      course.id = maxId + 1;
      return this.updateCourse(course);
    })
  }

  updateCourse(course: Course){
    const courseRef = doc(this.firestore, "courses", course.id.toString());
    return setDoc(courseRef, course, {merge: true});
  }

  deleteCourse(id: number){
    const courseRef = doc(this.firestore, "courses", id.toString());
    return deleteDoc(courseRef);
  }

  loadProductstoFirebase() {
    this.getCourses().subscribe(courses => {
      courses.forEach(course => {
        const courseRef = doc(this.firestore, "courses", course.id.toString());
        setDoc(courseRef, course);
      })
    });
  }
}
