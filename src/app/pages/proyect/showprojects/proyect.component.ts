import { Component, OnInit, Pipe, Injectable } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import Swal from 'sweetalert2';
import { Project } from 'src/app/models/projects.model';
import { dateFormatPipe } from '../../pipes/format-date.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';
import { Pagination } from 'src/app/models/pagination.model';
import { SIZE_DATA } from '../../../config/constants';
import { HeaderComponent } from '../../../shared/header/header.component';




@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  providers: [dateFormatPipe],
  styleUrls: []
})
@Injectable({
  providedIn: 'root'
})
export class ProyectComponent implements OnInit {
  project: Project;
  search: Project = new Project();
  header: string;
  pagination: Pagination = new Pagination();
  url: string;

  isEnabled: string;
  // tslint:disable-next-line:variable-name
  constructor(public _project: ProjectService,
              // tslint:disable-next-line:variable-name
              public _datePipe: dateFormatPipe,
              private router: Router,
              // tslint:disable-next-line:variable-name
              public _proResService: ProjectsResourcesService,
              public activateRoute: ActivatedRoute) {
                this.activateRoute
                .queryParams
                .subscribe(params => {
                  this.pagination.numberPage = +params.numberPage;
                  this.pagination.sizeData = +params.sizeData;
                 // this.url = '/project?numberPage=' + this.pagination.numberPage + '&sizeData=' + this.pagination.sizeData;
                });
                // this.body.sizeData = SIZE_DATA;
                this.isEnabled = 'disabled';
              }

  ngOnInit() {
    this.load();
  }

  /* load() {
    if ( this.router.url === this.url) {
      this._project.cargarProyectosPage(this.pagination).subscribe((res: any) => {
        this.proyect = res;
        this.header = 'Proyectos';
      });
    } else
    if ( this.router.url === '/projectwhitoutrec' ) {
      this._proResService.loadProjectsWithoutResources().subscribe((res: any) => {
        this.proyect = res;
        this.header = 'Proyectos sin recursos asignados';
      });
    }
  } */

  load() {
      this._project.cargarProyectosPage(this.pagination).subscribe((res: any) => {
        this.project = res;
        this.header = 'Proyectos';
      });
  }

  updatePageSum() {
    this.pagination.numberPage = this.pagination.numberPage + 1;
    this.router.navigate(['/project'],
    {
      queryParams: {
        numberPage: this.pagination.numberPage, sizeData: this.pagination.sizeData
      }
    });
    this.ngOnInit();
  }

  updatePageRes() {
    this.pagination.numberPage = this.pagination.numberPage - 1;
    this.router.navigate(['/project'],
    {
      queryParams: {
        numberPage: this.pagination.numberPage, sizeData: this.pagination.sizeData
      }
    });
    this.ngOnInit();
  }

  prueba() {
    console.log('presionado');
    this.search.name  = String((document.getElementById('filter2') as HTMLInputElement).value);
    this.search.proyectLeader  = String((document.getElementById('filter5') as HTMLInputElement).value);
    // console.log(this.project.name);
    this._project.loadByFilters(this.search).subscribe((resp: Project) => {
      this.project = resp;
    });
    if (this.search.name === '' || this.search.proyectLeader === '') {
      this.load();
    }
  }

  filter() {
    // console.log('Tecla Presionada');
    this.search.name  = String((document.getElementById('filter2') as HTMLInputElement).value);
    this.search.proyectLeader  = String((document.getElementById('filter5') as HTMLInputElement).value);
   // console.log(this.project.name);
    this._project.loadByFilters(this.search).subscribe((resp: Project) => {
      this.project = resp;
    });
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
          this.load();
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
