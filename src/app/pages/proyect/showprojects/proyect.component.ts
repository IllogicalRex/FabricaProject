import { Component, OnInit, Pipe } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import Swal from 'sweetalert2';
import { Project } from 'src/app/models/projects.model';
import { dateFormatPipe } from '../pipes/format-date.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';




@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  providers: [dateFormatPipe],
  styleUrls: []
})
export class ProyectComponent implements OnInit {
  proyect: Project;
  header: string;
  currentPage: number;
  newUrl: string;
  // tslint:disable-next-line:variable-name
  constructor(public _project: ProjectService,
              // tslint:disable-next-line:variable-name
              public _datePipe: dateFormatPipe,
              private router: Router,
              // tslint:disable-next-line:variable-name
              public _proResService: ProjectsResourcesService,
              public activateRoute: ActivatedRoute) {
                activateRoute.params.subscribe(params => {
                  // tslint:disable-next-line:no-string-literal
                  this.currentPage = params['currentPage'];
                  console.log(this.currentPage);
                });
               }

  ngOnInit() {
    this.cargar();
    this.currentPage = 1;
    this.newUrl = '/project/' + this.currentPage;
  }

  cargar() {
    console.log(this.router.url);
    if ( this.router.url === ('/project/' + this.currentPage)) {
      this._project.cargarProyectosPage(this.currentPage).subscribe((res: any) => {
        this.proyect = res;
        console.log(res);
        this.header = 'Proyectos';
      });
    } else
    if ( this.router.url === '/projectwhitoutrec' ) {
      this._proResService.loadProjectsWithoutResources().subscribe((res: any) => {
        this.proyect = res;
        this.header = 'Proyectos sin recursos asignados';
      });
    }
  }

  updatePageSum() {
    this.currentPage = this.currentPage + 1;
    console.log(this.currentPage);
    this.cargar();
  }

  updatePageRes() {
    this.currentPage = this.currentPage - 1;
    this.cargar();
  }

  // tslint:disable-next-line:variable-name
  deleteProject(pro_ID: number) {
    Swal.fire({
      title: '¿Seguro quieres eliminar este registro?',
      text: '¡una vez eliminado no podras recuperarlo!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.value) {
        this._project.deleteProject(pro_ID).subscribe((res: any) => {
          console.log(res);
          this.cargar();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
}
