import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { MeComponent } from './pages/me/me.component';
import { MsrCollectionComponent } from './pages/msr-collection/msr-collection.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'me', component: MeComponent },
  { path: 'msr-collection', component: MsrCollectionComponent },
];
