import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/projects.model';
import swal from 'sweetalert';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  project: Project = new Project();
  // tslint:disable-next-line:variable-name
  constructor(public _project: ProjectService) { }

  ngOnInit() {
  }

  guardar() {
    this._project.guardarProyectos(this.project).subscribe((res: any) => {
      console.log(res);
    });
    swal('Aviso', 'Registro guardado con exito', 'success');
  }

  obtenerDatos( f: NgForm) {
      console.log(f.valid);
      console.log(f.value);
  }
}
