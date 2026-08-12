import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component'

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
