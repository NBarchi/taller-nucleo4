import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseFormComponent } from './pages/course-form/course-form.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';
import { permissionsGuard } from './guards/permissions/permissions.guard';
import { warningsGuard } from './guards/warnings/warnings.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(["/login"]))},
    {path: 'courses', component: CoursesComponent, ...canActivate(() => redirectUnauthorizedTo(["/login"]))},
    { path: 'courses/:id', component: CourseComponent, canActivate: [permissionsGuard]},
    { path: 'course-form/:id', component: CourseFormComponent, canDeactivate: [warningsGuard] },
    { path: 'login', component: LoginComponent }
];
