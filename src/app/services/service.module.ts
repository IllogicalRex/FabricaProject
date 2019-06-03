import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from '../services/project/project.service';
import { ResourceService } from './resources/resources.service';

@NgModule({
  declarations: [],
  providers: [
    ProjectService,
    ResourceService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
