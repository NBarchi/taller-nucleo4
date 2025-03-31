import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../types/course';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-course',
  imports: [RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  course: Course | undefined;

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.coursesService.getCourse(id).subscribe(course => {
        this.course = course;
      })

    })
  }
}
