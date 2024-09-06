// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { Tintin60catVrExperienceComponent } from './tintin60cat-vr-experience/tintin60cat-vr-experience.component';
import { HospitalViladecansComponent } from './hospital-viladecans/hospital-viladecans.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/hospital-viladecans-vr-experience', component: HospitalViladecansComponent },
  { path: 'projects/tintin60cat-vr-experience', component: Tintin60catVrExperienceComponent },
  { path: '**', component: NotFoundComponent }, // Componente 404
];
