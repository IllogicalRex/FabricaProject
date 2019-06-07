import { Component, OnInit, Injectable } from '@angular/core';
import { ProyectComponent } from 'src/app/pages/proyect/showprojects/proyect.component';
import { ProjectService } from '../../services/project/project.service';
import { Project } from 'src/app/models/projects.model';
import { FilterProject } from 'src/app/models/filter-project.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {


  search: string;
  p: ProyectComponent;
  text: string;
  project: FilterProject = new FilterProject();

  searchProjects: Project;
  constructor(
              ) {


  }

  ngOnInit() {
  }

  filter() {

  }

}
