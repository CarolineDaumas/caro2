import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaddyComponent } from './components/caddy/caddy.component';
import { TrainingsComponent } from './components/trainings/trainings.component';


const routes: Routes = [
  {
  path: 'trainings',
  component: TrainingsComponent
  },
  {
  path:'caddy',
  component:CaddyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
