import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssesmentOneRoutingModule } from './assesment-one-routing.module';
import { MathProblemComponent } from './components/math-problem/math-problem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MathProblemComponent],
  imports: [
    CommonModule,
    AssesmentOneRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AssesmentOneModule { }
