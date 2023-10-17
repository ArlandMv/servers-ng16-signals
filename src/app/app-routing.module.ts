import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServersComponent } from './components/servers/servers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  /*{
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ServerListComponent },
      { path: 'details/:id', component: ServerDetailsComponent },
      { path: 'create', component: ServerCreateComponent },
      { path: 'update/:id', component: ServerUpdateComponent },
    ],
  },*/
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
