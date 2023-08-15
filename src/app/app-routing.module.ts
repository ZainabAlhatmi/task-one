import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [/* ... */],

  exports: [RouterModule]
})
export class AppRoutingModule { }
