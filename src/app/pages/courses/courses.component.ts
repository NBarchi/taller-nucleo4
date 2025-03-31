import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Router, RouterLink } from '@angular/router';
import { Course } from '../../types/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ){}

  ngOnInit(){
    this.getCourses();
    this.coursesService.loadProductstoFirebase();
  }

  goToCourse(id: number){
    this.router.navigate(['/courses', id])
  }

  getCourses(){
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    })
  }

  deleteCourse(event: Event, id: number){
    event.stopPropagation();
    this.coursesService.deleteCourse(id)
    .then(() => console.log("Curso Eliminado con Exito"))
    .catch(err => console.log(err));
  }
}
