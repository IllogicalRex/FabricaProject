import { Component, OnInit } from '@angular/core';
import { ProjectResources } from '../../../models/project-resources/project-resources.model';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';
import { Asign } from '../../../models/project-resources/project-resource.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-project-resources',
  templateUrl: './project-resources.component.html',
  styleUrls: ['./project-resources.component.css']
})
export class ProjectResourcesComponent implements OnInit {
  proRec: ProjectResources;
  activeProRec: boolean;
  activePro: boolean;
  activeRec: boolean;
  optionSelected = 1;
  // tslint:disable-next-line:variable-name
  constructor(public _projectsResources: ProjectsResourcesService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this._projectsResources.loadProjectsResources().subscribe((res: any) => {
      this.proRec = res;
    });
  }
  isActive(id: number) {
    this.optionSelected = id;
    if (id === 1) {
      this.activeProRec = true;
      this.activePro = false;
      this.activeRec = false;
    }
    console.log(this.optionSelected);
  }

  deleteResourceProject(proID: number, recID: number) {
    console.log(proID, recID);
    Swal.fire({
      title: '¿Seguro quieres desasignar proyecto?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    })
    .then((result) => {
      if (result.value) {
        this._projectsResources.deleteProjectsResources(proID, recID).subscribe((res: any) => {
          this.ngOnInit();
    });
        Swal.fire(
        'Desasignado!',
        'Proyecto y recurso desasignado correctamente.',
        'success'
        );
      }
    });

  }
}
