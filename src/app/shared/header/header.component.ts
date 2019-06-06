import { Component, OnInit } from '@angular/core';
import { ProyectComponent } from 'src/app/pages/proyect/showprojects/proyect.component';
import { ProjectService } from '../../services/project/project.service';
import { Project } from 'src/app/models/projects.model';
import { FilterProject } from 'src/app/models/filter-project.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  search: string;
  p: ProyectComponent;
  text: string;
  project: FilterProject = new FilterProject();
  // tslint:disable-next-line:variable-name
  constructor(public _project: ProjectService) {
    // this.search = this.p.searchPro;

  }

  ngOnInit() {
  }

  filter() {
    console.log('Tecla Presionada');
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.text = String((<HTMLInputElement> document.getElementById('filter')).value);
    console.log(this.text);
    this.project.name = this.text;
    this.project.proyectLeader = '';
   // console.log(this.project.name);
    this._project.loadByFilters(this.project).subscribe((resp: Project) => {
      console.log(resp);
    });
    /* switch (this.search) {
      case 'project':
          break;
      case 'resource':
        break;
      case 'withoutrec':
        break;
    } */
  }

}
