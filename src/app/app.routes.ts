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




const appRoutes: Routes = [
    {path: 'project/:currentPage', component: ProyectComponent },
    {path: 'newproject', component: NewProjectComponent },
    {path: 'updateproject/:pro_ID', component: UpdateProjectComponent },
    {path: 'resource', component: ResourcesComponent },
    {path: 'newrec', component: NewResourceComponent },
    {path: 'updaterec/:rec_ID', component: UpdateResourceComponent},
    {path: 'projectresources', component: ProjectResourcesComponent},
    {path: 'projectwhitoutrec', component: ProyectComponent},
    {path: 'resourceswhitoutpro', component: ResourcesComponent}
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
