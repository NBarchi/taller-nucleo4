  import { Component } from '@angular/core';
  import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { CoursesService } from '../../services/courses/courses.service';
  import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-course-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './course-form.component.html',
    styleUrl: './course-form.component.css'
  })
  export class CourseFormComponent {  
    form: FormGroup;
    id: number = 0;

    constructor(
      private coursesSevice: CoursesService,
      private formBuilder: FormBuilder,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {
      this.form = this.formBuilder.group({
        title:["", [Validators.required]],
        description: [""],
        category: [""],
        level: [""],
        price: [0, [Validators.required]],
        instructor: [""],
        duration: [0, [Validators.required]],
        rating: [{rate: 0, count: 0}],
        frontImg: [""],
        urlVideo: [""]
      })
    }

    addCourse(){
      if(this.form.invalid) return;
      this.coursesSevice.addCourse(this.form.value)
        .then(() => this.router.navigate(["/courses"]))
        .catch(error => console.log(error));
    }

    updateCourse(){
      if(this.form.invalid) return;
      this.coursesSevice.updateCourse({ id: this.id, ...this.form.value})
        .then(() => this.router.navigate(["/courses"]))
        .catch(error => console.log(error));
    }


  }
