import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabularDataComponent } from './tabular-data/tabular-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: TabularDataComponent },
  { path: 'directive', component: DirectiveExampleComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
