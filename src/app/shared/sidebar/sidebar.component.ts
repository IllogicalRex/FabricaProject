import { Component, OnInit, Injectable } from '@angular/core';
import { Pagination } from '../../models/pagination.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectComponent } from '../../pages/proyect/showprojects/proyect.component';
import { ProjectService } from 'src/app/services/project/project.service';
import { SIZE_DATA } from '../../config/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  body: Pagination = new Pagination();
  url: string;
  // tslint:disable-next-line:variable-name
  constructor(public activateRoute: ActivatedRoute,
              public route: Router) {
              this.body.numberPage = 1;
              this.body.sizeData = SIZE_DATA;
              console.log(this.body.sizeData);
      }

  ngOnInit() {

  }


}
