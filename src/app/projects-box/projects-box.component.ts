import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-box',
  templateUrl: './projects-box.component.html',
  styleUrls: ['./projects-box.component.css']
})
export class ProjectsBoxComponent implements OnInit {
  const projects = [
    {
      name: 'StudyHive',
      repoLink: 'https://github.com/wntitus/studyhive'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
