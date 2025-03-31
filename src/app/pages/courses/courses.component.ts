import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Router, RouterLink } from '@angular/router';
import { Course } from '../../types/course';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] = [];
  role: string = 'admin';

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private userService: UserService
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

  getRole() {
    this.userService.getCurrentUser()!
      .then(user => {
        console.log(user);
        this.role = user?.["role"]
      });
  }
}
