import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsModel } from 'src/assement-two/models/questionsModel';
import { AssessmentService } from '../../services/assessment.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  progressBarSplit;
  disableNext = true;
  selectedItem;
  constructor(public assessmentService: AssessmentService, private router: Router) { }

  ngOnInit(): void {
    this.assessmentService.questionProgress = 0;
    this.assessmentService.getQuestions().pipe(take(1)).subscribe((data: QuestionsModel[]) => {
      this.assessmentService.questions = data.sort(() => Math.random() - 0.5); // shuffling
      this.progressBarSplit = Math.ceil(100 / data.length);
    });
  }

  selectAnswer(choice: number, qnId, option): void {
    this.assessmentService.questions.filter(x => x.qnId === qnId).map(x => x.choosenAnswer = choice);
    this.selectedItem = option;
  }
  onSubmitResponse(): void {
    if (this.assessmentService.questions[this.assessmentService.questionProgress].choosenAnswer) {
      this.disableNext = false;
    }
    if (this.assessmentService.questionProgress + 1 === 15) {
      this.router.navigate(['AssessmentEngine/results']);
    }
  }
  goToNextQuetion(): void {
    this.disableNext = true;
    this.assessmentService.questionProgress++;
  }

}
