import { Component, OnInit, Pipe } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import Swal from 'sweetalert2';
import { Project } from 'src/app/models/projects.model';
import { dateFormatPipe } from '../../pipes/format-date.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';
import { Pagination } from 'src/app/models/pagination.model';
import { SIZE_DATA } from '../../../config/constants';

@Component({
  selector: 'app-project-without-resources',
  templateUrl: './project-without-resources.component.html',
  providers: [dateFormatPipe],
  styleUrls: ['./project-without-resources.component.css']
})
export class ProjectWithoutResourcesComponent implements OnInit {

  proyect: Project;
  pagination: Pagination = new Pagination();
  url: string;
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
      this._proResService.loadProjectsWithoutResources(this.pagination).subscribe((res: any) => {
        this.proyect = res;
    });
  }

  updatePageSum() {
    this.pagination.numberPage = this.pagination.numberPage + 1;

    this.router.navigate(['/projectwhitoutrec'],
    {
      queryParams: {
        numberPage: this.pagination.numberPage, sizeData: this.pagination.sizeData
      }
    });
    this.ngOnInit();
  }

  updatePageRes() {
    this.pagination.numberPage = this.pagination.numberPage - 1;
    this.router.navigate(['/projectwhitoutrec'],
    {
      queryParams: {
        numberPage: this.pagination.numberPage, sizeData: this.pagination.sizeData
      }
    });
    this.ngOnInit();
  }

}
