import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathProblemComponent } from './components/math-problem/math-problem.component';

const routes: Routes = [
  {path: '', component: MathProblemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssesmentOneRoutingModule { }
