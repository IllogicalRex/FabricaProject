import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { ProyectComponent } from '../../pages/proyect/showprojects/proyect.component';
import { Project } from 'src/app/models/projects.model';
import { projection } from '@angular/core/src/render3';
import { element } from 'protractor';
import { Pagination } from 'src/app/models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  element: HTMLElement;
  project: Project;
  constructor(public http: HttpClient) {

  }

  cargarProyectos() {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/project';
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }

  cargarProyectosPage(page: number) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/project/' + page;
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  cargarProyectosByID(pro_ID: number) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/project/' + pro_ID;
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }



  guardarProyectos(project: Project) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/project';
    return this.http.post(url, project)
    .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  deleteProject(pro_ID: number) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/project/' + pro_ID;
    return this.http.delete(url)
    .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  updateProject(pro_ID: number, body: any) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/project/' + pro_ID;
    return this.http.put(url, body).pipe(map((res: any)  => {
      console.log(res);
    }));
  }

}
