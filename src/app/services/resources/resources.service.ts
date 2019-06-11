import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { ProyectComponent } from '../../pages/proyect/showprojects/proyect.component';
import { Project } from 'src/app/models/projects.model';
import { projection } from '@angular/core/src/render3';
import { element } from 'protractor';
import { Resource } from 'src/app/models/resource.model';
import { Pagination } from 'src/app/models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  element: HTMLElement;
  resource: Resource;
  constructor(public http: HttpClient) {

  }

  loadResources(body: Pagination) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources?currentPage=' + body.numberPage + '&sizeData=' + body.sizeData;
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  loadResourceByID(rec_ID: number) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources/ByID/' + rec_ID;
    return this.http.get(url)
        .pipe(map((resp: any) => resp));
  }

  loadByFilters(filter: Resource) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/hresource/ByFilter';
    return this.http.post(url, filter);
     // .pipe(map((res: Project) => res));
  }


  saveResource(resource: Resource) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources';
    return this.http.post(url, resource)
    .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  deleteResources(pro_ID: number) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources/' + pro_ID;
    return this.http.delete(url)
    .pipe(map((resp: any) => resp));
  }

  // tslint:disable-next-line:variable-name
  updateResources(rec_ID: number, body: any) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/HResources/' + rec_ID;
    return this.http.put(url, body).pipe(map((res: any)  => {
      console.log(res);
    }));
  }

}
