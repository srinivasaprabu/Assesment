import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssementTwoRoutingModule } from './assement-two-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultComponent } from './components/result/result.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [QuestionsComponent, ResultComponent],
  imports: [
    CommonModule,
    AssementTwoRoutingModule,
    ChartModule
  ]
})
export class AssementTwoModule { }
