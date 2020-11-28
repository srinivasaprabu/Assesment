import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultComponent } from './components/result/result.component';
const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'results', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssementTwoRoutingModule { }
