import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects.model';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {
  project: Project[] = [];
  nrSelect: number;
  // tslint:disable-next-line:variable-name
  constructor(public _project: ProjectService) { }

  ngOnInit() {
    this._project.cargarProyectos().subscribe(project => {
      this.project = project;
    });

  }
  llenarCampos() {

  }
  eliminar() {

  }

}
