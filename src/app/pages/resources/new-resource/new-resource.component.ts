import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../models/resource.model';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../../../services/resources/resources.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-new-resource',
  templateUrl: './new-resource.component.html',
  styleUrls: ['./new-resource.component.css']
})
export class NewResourceComponent implements OnInit {

  resource: Resource = new Resource();
  // tslint:disable-next-line:variable-name
  constructor(public _resuorceService: ResourceService) { }

  ngOnInit() {
  }

  save() {
    this._resuorceService.saveResource(this.resource).subscribe((res: any) => {
    });
    swal('Aviso', 'Registro guardado con exito', 'success');
  }
  getData(f: NgForm) {
    console.log(f.value);
  }
}
