import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../models/resource.model';
import { Project } from '../../../models/projects.model';
import { Asign } from 'src/app/models/project-resources/project-resource.model';
import { Pagination } from 'src/app/models/pagination.model';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';
import { ResourceService } from 'src/app/services/resources/resources.service';
import { dateFormatPipe } from '../../pipes/format-date.pipe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asign-projects',
  templateUrl: './asign-projects.component.html',
  providers: [dateFormatPipe],
  styleUrls: ['./asign-projects.component.css']
})

export class AsignProjectsComponent implements OnInit {

  resource: Resource = new Resource();
  project: Project;
  proRec: Asign;
  recID: number;
  proID: number;
  elem: HTMLInputElement;
  isChecked: any;
  projectsID: Array<Asign> = new Array();
  pagination: Pagination = new Pagination();

  // tslint:disable-next-line:variable-name
  constructor( public _projectResource: ProjectsResourcesService,
               // tslint:disable-next-line:variable-name
               public _activatedRoute: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               public _resource: ProjectService) {
                 this._activatedRoute.params.subscribe( params => {
                  this.recID = params.rec_ID;
                 });
                 this.pagination.numberPage = 1;
                 this.pagination.sizeData = 6;
                }

  ngOnInit() {
    this.loadResources();
    this.loadProjects();
  }

  check(proid: number) {
    this.proID = proid;
    this.proRec =  new Asign();
    this.proRec.rec_ID = this.recID;
    this.proRec.pro_ID = proid;
    console.log(this.proRec);
    this.projectsID.push(this.proRec);
  }

  guardar() {
    Swal.fire({
      title: '¿Seguro quieres asignar este recurso?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Asignar'
    })
    .then((result) => {
      if (result.value) {
        // tslint:disable-next-line:no-angle-bracket-type-assertion
        this.elem = <HTMLInputElement> document.getElementById('exampleCheck' + this.proID);
        this.isChecked = this.elem.checked;
        this.projectsID.forEach(element => {
        if ( this.isChecked ) {
            this._projectResource.saveProjectsResources(element).subscribe((res: any) => {
          });
        }
        this.loadProjects();
      });
        Swal.fire(
        'Asignado!',
        'Asignado correctamente',
        'success'
      );
    }
  });
  }

  loadResources() {
    this._resource.loadResourcesByID(this.recID ).subscribe( (res: Project) => {
      this.resource = res;
    });
  }

  loadProjects() {
    this._projectResource.loadProjectsWithoutResources(this.pagination).subscribe((res: Resource) => {
      this.project = res;
    });
  }


}
