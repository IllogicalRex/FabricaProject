import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/projects.model';
import { Resource } from '../../../models/resource.model';
import { ProjectService } from '../../../services/project/project.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';
import { Asign } from '../../../models/project-resources/project-resource.model';
import { Pagination } from 'src/app/models/pagination.model';

@Component({
  selector: 'app-asign-resource',
  templateUrl: './asign-resource.component.html',
  styleUrls: ['./asign-resource.component.css']
})
export class AsignResourceComponent implements OnInit {

  project: Project = new Project();
  resource: Resource;
  proRec: Asign;
  proID: number;
  recID: number;
  elem: HTMLInputElement;
  isChecked: any;
  recourcesID: Array<Asign> = new Array();
  pagination: Pagination = new Pagination();

  // tslint:disable-next-line:variable-name
  constructor( public _resource: ProjectsResourcesService,
               // tslint:disable-next-line:variable-name
               public _activatedRoute: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               public _project: ProjectService,
               // tslint:disable-next-line:variable-name
               public _projectResource: ProjectsResourcesService) {
                 _activatedRoute.params.subscribe( params => {
                  this.proID = params.pro_ID;
                 });
                 this.pagination.numberPage = 1;
                 this.pagination.sizeData = 6;
                }

  ngOnInit() {
    this.loadProject();
    this.loadResources();
  }

  check(recid: number) {
    this.recID = recid;
    this.proRec =  new Asign();
    this.proRec.pro_ID = this.proID;
    this.proRec.rec_ID = recid;
    console.log(this.proRec);
    this.recourcesID.push(this.proRec);
  }

  guardar() {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.elem = <HTMLInputElement> document.getElementById('exampleCheck' + this.recID);
    this.isChecked = this.elem.checked;
    this.recourcesID.forEach(element => {
    if ( this.isChecked ) {
        this._projectResource.saveProjectsResources(element).subscribe((res: any) => {
         console.log(element);
      });
    }
  });
  }

  loadProject() {
    console.log(this.proID);
    this._project.cargarProyectosByID(this.proID ).subscribe( (res: Project) => {
      this.project = res;
    });
  }

  loadResources() {
    this._resource.loadResourcesWithoutProjects(this.pagination).subscribe((res: Resource) => {
      this.resource = res;
    });
  }



}
