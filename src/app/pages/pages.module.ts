import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ProyectComponent } from './proyect/showprojects/proyect.component';
import { NewProjectComponent } from './proyect/new-project/new-project.component';
import { DeleteProjectComponent } from './proyect/delete-project/delete-project.component';
import { RouterModule } from '@angular/router';
import { UpdateProjectComponent } from './proyect/update-project/update-project.component';
import { dateFormatPipe } from './proyect/pipes/format-date.pipe';
import { ResourcesComponent } from './resources/resources/resources.component';
import { NewResourceComponent } from './resources/new-resource/new-resource.component';
import { UpdateResourceComponent } from './resources/update-resource/update-resource.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ProjectResourcesComponent } from './project-resources/project-resources/project-resources.component';
import { ProjectWithoutResourcesComponent } from './project-resources/project-without-resources/project-without-resources.component';
@NgModule({
  declarations: [
    PagesComponent,
    ProyectComponent,
    NewProjectComponent,
    DeleteProjectComponent,
    UpdateProjectComponent,
    dateFormatPipe,
    ResourcesComponent,
    NewResourceComponent,
    UpdateResourceComponent,
    ProjectResourcesComponent,
    ProjectWithoutResourcesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PagesComponent,
    dateFormatPipe,
    ResourcesComponent,
    NewResourceComponent,
    SidebarComponent,
    ProjectResourcesComponent
  ]
})
export class PagesModule { }
