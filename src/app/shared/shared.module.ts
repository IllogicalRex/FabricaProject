import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent
    ],
    imports: [
        FormsModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent
    ]
})

export class SharedModule { }
