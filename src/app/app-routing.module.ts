import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'MathProblem', pathMatch: 'full' },
  { path: 'MathProblem', loadChildren: () => import('src/assesment-one/assesment-one.module').then(x => x.AssesmentOneModule) },
  { path: 'AssessmentEngine', loadChildren: () => import('src/assement-two/assement-two.module').then(x => x.AssementTwoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
