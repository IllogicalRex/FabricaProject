import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../models/resource.model';
import { Pagination } from 'src/app/models/pagination.model';
import { ResourceService } from 'src/app/services/resources/resources.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';

@Component({
  selector: 'app-resource-without-project',
  templateUrl: './resource-without-project.component.html',
  styleUrls: ['./resource-without-project.component.css']
})
export class ResourceWithoutProjectComponent implements OnInit {
  resource: Resource;
  pagination: Pagination = new Pagination();
  url: string;
  // tslint:disable-next-line:variable-name
  constructor(public _project: ResourceService,
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
                });
                // this.body.sizeData = SIZE_DATA;
              }

  ngOnInit() {
    this.load();
  }

  load() {
      this._proResService.loadResourcesWithoutProjects(this.pagination).subscribe((res: any) => {
        this.resource = res;
    });
  }

  updatePageSum() {
    this.pagination.numberPage = this.pagination.numberPage + 1;
    this.router.navigate(['/resourceswhitoutpro'],
    {
      queryParams: {
        numberPage: this.pagination.numberPage, sizeData: this.pagination.sizeData
      }
    });
    this.ngOnInit();
  }

  updatePageRes() {
    this.pagination.numberPage = this.pagination.numberPage - 1;
    this.router.navigate(['/resourceswhitoutpro'],
    {
      queryParams: {
        numberPage: this.pagination.numberPage, sizeData: this.pagination.sizeData
      }
    });
    this.ngOnInit();
  }

}
