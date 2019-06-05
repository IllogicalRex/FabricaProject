import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../../services/resources/resources.service';
import { Resource } from 'src/app/models/resource.model';
import swal from 'sweetalert';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';
import { Pagination } from 'src/app/models/pagination.model';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resource: Resource;
  route: string;
  header: string;
  pagination: Pagination = new Pagination();

  // tslint:disable-next-line:variable-name
  constructor(public _resource: ResourceService,
              private router: Router,
              // tslint:disable-next-line:variable-name
              public _proResService: ProjectsResourcesService,
              public activateRoute: ActivatedRoute) {
                this.activateRoute
                .queryParams
                .subscribe(params => {
                  // Defaults to 0 if no query param provided.
                  this.pagination.numberPage = +params.numberPage;
                  this.pagination.sizeData = +params.sizeData;
                  console.log(this.pagination.numberPage, this.pagination.sizeData);
                });
              }

  ngOnInit() {
    this.loadResources();
  }

  loadResources() {
      this._resource.loadResources(this.pagination).subscribe((res: any) => {
        this.resource = res;
        this.header = 'Recursos';
      });
  }

  updatePageSum() {
    this.pagination.numberPage = this.pagination.numberPage + 1;
    this.router.navigate(['/resource'],
    {
      queryParams: {
        numberPage: this.pagination.numberPage, sizeData: this.pagination.sizeData
      }
    });
    this.ngOnInit();
  }

  updatePageRes() {
    this.pagination.numberPage = this.pagination.numberPage - 1;
    this.router.navigate(['/resource'],
    {
      queryParams: {
        numberPage: this.pagination.numberPage, sizeData: this.pagination.sizeData
      }
    });
    this.ngOnInit();
  }


  delete(ID: number) {
    swal({
      title: '¿Seguro quieres modificar este registro?',
      icon: 'warning',
      buttons: ['Cancel', 'Ok'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._resource.deleteResources(ID).subscribe((res: any) => {
          console.log(res);
          this.loadResources();
        });
        swal('Registro guardado exitosamente!', {
          icon: 'success',
    });
  }
  });
  }

}
