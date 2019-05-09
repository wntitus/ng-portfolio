import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-projects-box',
  templateUrl: './projects-box.component.html',
  styleUrls: ['./projects-box.component.css']
})
export class ProjectsBoxComponent implements OnInit {
  projects: Array<Project> = [
    {
      name: 'StudyHive',
      repoLink: 'https://github.com/wntitus/studyhive',
      description: `This project is a personal favorite of mine. It's the project where I started
                    using Angular and ended up really liking it. It's a full-stack MEAN application
                    to track study resources and notes. I implemented authorization using bcrypt and
                    JSON web tokens. It communicates with a REST Node backend to create and check users
                    from a cloud-hosted Mongo database.`
    }, {
      name: 'DevDen',
      repoLink: 'https://github.com/wntitus/DevDen',
      description: `This is the project that made me really love working cooperatively on projects.
                    It's a full-stack app utilizing a MySQL database with Passport authentication
                    that serves as a hub for developers to create projects and find collaborators for
                    their projects. We also managed to implement a live chat using websockets, which
                    was a lot of fun.`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
