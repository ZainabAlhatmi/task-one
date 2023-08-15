import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  StudentList: any[] = [
    { name: 'zainab', Email: 'zainab@gmail' ,Mark:55},
    { name: 'Ali', Email: 'Ali@gmail' ,Mark:30},
    { name: 'Ahmed', Email: 'ahmed@gmail' ,Mark:70},
    { name: 'Amal', Email: 'Amal@gmail' ,Mark:20}
  
  ]

}
