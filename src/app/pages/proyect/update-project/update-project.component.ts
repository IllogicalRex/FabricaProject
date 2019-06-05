import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/projects.model';
import { dateFormatPipe } from '../../pipes/format-date.pipe';
import swal from 'sweetalert';
@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  providers: [dateFormatPipe],
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  dateres: Date;
  id: number;
  project: Project = new Project();
  // tslint:disable-next-line:variable-name
  constructor(public _projectService: ProjectService,
              public activateRoute: ActivatedRoute,
              // tslint:disable-next-line:variable-name
              public _formatPipe: dateFormatPipe) {
    activateRoute.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.id = params['pro_ID'];
    });
  }

  ngOnInit() {
    this.cargarByFilter();
  }

  format(date: Date) {
    this._formatPipe.transform(date.toString());
  }

  cargarByFilter() {
    this._projectService.cargarProyectosByID(this.id).subscribe((res: any) => {
      this.project = res;

    });
  }
  saveProject() {
    swal({
      title: '¿Seguro quieres modificar este registro?',
      icon: 'warning',
      buttons: ['Cancel', 'Ok'],
      dangerMode: true,
    })
    .then((willUpdate) => {
      if (willUpdate) {
        this._projectService.updateProject(this.id, this.project).subscribe((res: any) => {
          console.log(res);
        });
        swal('Registro guardado exitosamente!', {
          icon: 'success',
        });
      }
    });
  }
}
