import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
courses =[
  {
    "Id": 1,
    "CourseCode": "001",
    "CourseName": "Information Technology"
  },
  {
    "Id": 2,
    "CourseCode": "002",
    "CourseName": "Computer Science"
  },
  {
    "Id": 3,
    "CourseCode": "003",
    "CourseName": "Data Science"
  },
  {
    "Id": 4,
    "CourseCode": "004",
    "CourseName": "Software Engineering"
  },
  {
    "Id": 5,
    "CourseCode": "005",
    "CourseName": "Cyber Security"
  }
]
}
