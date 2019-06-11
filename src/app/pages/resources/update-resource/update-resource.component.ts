import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../../services/resources/resources.service';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'src/app/models/resource.model';
import swal from 'sweetalert';


@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.css']
})
export class UpdateResourceComponent implements OnInit {

  resource: Resource = new Resource();
  id: number;
  // tslint:disable-next-line:variable-name
  constructor(public _resource: ResourceService,
              // tslint:disable-next-line:variable-name
              public _activeRoute: ActivatedRoute) {
                _activeRoute.params.subscribe(params => {
                  // tslint:disable-next-line:no-string-literal
                  this.id = params['rec_ID'];
               });
              }

  ngOnInit() {
    this.loadById();
  }

  save() {
    swal({
      title: '¿Seguro quieres modificar este registro?',
      icon: 'warning',
      buttons: ['Cancel', 'Ok'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
    this._resource.updateResources(this.id, this.resource).subscribe((res: any) => {
      console.log(res);
    });
    swal('Registro guardado exitosamente!', {
      icon: 'success',
    });
  }
});
  }

  loadById() {
    this._resource.loadResourceByID(this.id).subscribe((res: any) => {
      this.resource = res;
      console.log(res);
    });
  }
}
