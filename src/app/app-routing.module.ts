import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaddyComponent } from './components/caddy/caddy.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {path: 'trainings', component: TrainingsComponent},
  { path:'caddy',component:CaddyComponent},
  {path:'customer', component: CustomerComponent},
  {path:'', redirectTo:'trainings', pathMatch:'full'},
  {path:'404', component: NotFoundComponent},
  {path:'**', redirectTo:'/404'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
