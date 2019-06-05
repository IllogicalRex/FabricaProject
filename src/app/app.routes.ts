import { RouterModule, Routes } from '@angular/router';
import { ProyectComponent } from './pages/proyect/showprojects/proyect.component';
import { NewProjectComponent } from './pages/proyect/new-project/new-project.component';
import { DeleteProjectComponent } from './pages/proyect/delete-project/delete-project.component';
import { AppComponent } from './app.component';
import { UpdateProjectComponent } from './pages/proyect/update-project/update-project.component';
import { ResourcesComponent } from './pages/resources/resources/resources.component';
import { NewResourceComponent } from './pages/resources/new-resource/new-resource.component';
import { UpdateResourceComponent } from './pages/resources/update-resource/update-resource.component';
import { ProjectResourcesComponent } from './pages/project-resources/project-resources/project-resources.component';
import { query } from '@angular/core/src/render3';
import { ProjectWithoutResourcesComponent } from './pages/project-resources/project-without-resources/project-without-resources.component';
import { AsignResourceComponent } from './pages/project-resources/asign-resource/asign-resource.component';
import { ResourceWithoutProjectComponent } from './pages/project-resources/resource-without-project/resource-without-project.component';




const appRoutes: Routes = [
    {path: 'project', component: ProyectComponent },
    {path: 'resource', component: ResourcesComponent },
    {path: 'newproject', component: NewProjectComponent },
    {path: 'updateproject/:pro_ID', component: UpdateProjectComponent },
    {path: 'newrec', component: NewResourceComponent },
    {path: 'updaterec/:rec_ID', component: UpdateResourceComponent},
    {path: 'projectresources', component: ProjectResourcesComponent},
    {path: 'projectwhitoutrec', component: ProjectWithoutResourcesComponent},
    {path: 'resourceswhitoutpro', component: ResourceWithoutProjectComponent},
    {path: 'asignpro/:pro_ID', component: AsignResourceComponent}
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
