import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Resource } from 'src/app/models/resource.model';
import { ProjectResources } from '../../models/project-resources/project-resources.model';
import { Asign } from '../../models/project-resources/project-resource.model';
import { Pagination } from 'src/app/models/pagination.model';



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

  loadProjectsWithoutResources(body: Pagination) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/projectsresources/withoutrec?currentPage=' + body.numberPage + '&sizeData=' + body.sizeData;
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }

  loadResourcesWithoutProjects(body: Pagination) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/projectsresources/withoutpro?currentPage=' +
                                   body.numberPage + '&sizeData=' + body.sizeData;
    console.log(url);
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





  saveProjectsResources(proRec: Asign) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/ProjectsResources';
    return this.http.post(url, proRec)
    .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  deleteProjectsResources(proID: number, recID: number) {
    // tslint:disable-next-line:prefer-const
    let url =  URL_SERVICIOS + '/ProjectsResources/?Pro_ID=' + proID + '&Rec_ID=' + recID;
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
