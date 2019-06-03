import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../../services/resources/resources.service';
import { Resource } from 'src/app/models/resource.model';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { ProjectsResourcesService } from 'src/app/services/projects-resources/projects-resources.service';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resource: Resource;
  route: string;
  header: string;

  // tslint:disable-next-line:variable-name
  constructor(public _resource: ResourceService,
              private router: Router,
              // tslint:disable-next-line:variable-name
              public _proResService: ProjectsResourcesService) { }

  ngOnInit() {
    this.loadResources();
  }

  loadResources() {
    if ( this.router.url === '/resource') {
      this._resource.cargarResources().subscribe((res: any) => {
        this.resource = res;
        this.header = 'Recursos';
      });
    } else if ( this.router.url === '/resourceswhitoutpro' ) {
      this._proResService.loadResourcesWithoutProjects().subscribe((res: any) => {
        this.resource = res;
        this.header = 'Recursos sin proyectos asignados';
      });
    }
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
