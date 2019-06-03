import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Resource } from 'src/app/models/resource.model';
import { ProjectResources } from '../../models/project-resources/project-resources.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResourcesService {
  element: HTMLElement;
  projectResource: ProjectResources;
  constructor(public http: HttpClient) {

  }

  loadProjectsResources() {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/projectsResources';
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }

  loadProjectsWithoutResources() {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/projectsresources/withoutres';
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }

  loadResourcesWithoutProjects() {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/projectsresources/withoutpro';
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  cargarProjectsResourcesByID(pro_ID: number) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources/' + pro_ID;
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }



  saveProjectsResources(resource: Resource) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources';
    return this.http.post(url, resource)
    .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  deleteProjectsResources(pro_ID: number) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources/' + pro_ID;
    return this.http.delete(url)
    .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  updateProjectsResources(rec_ID: number, body: any) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources/' + rec_ID;
    return this.http.put(url, body).pipe(map((res: any)  => {
      console.log(res);
    }));
  }

}
