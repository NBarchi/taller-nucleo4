import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseFormComponent } from './pages/course-form/course-form.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'courses', component: CoursesComponent},
    { path: 'courses/:id', component: CourseComponent},
    { path: 'course-form/:id', component: CourseFormComponent },
];
