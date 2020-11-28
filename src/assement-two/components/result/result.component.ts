import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultModel } from 'src/assement-two/models/resultModel';
import { AssessmentService } from 'src/assement-two/services/assessment.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  pieChartdata: any;
  categoryWiseData = new Map<string, number>();
  constructor(public assessmentService: AssessmentService, private router: Router) { }

  ngOnInit(): void {
    this.assessmentService.correctAnswerCount = 0;
    if ((this.assessmentService.questionProgress + 1) === 15) {
      this.assessmentService.getAnswers().subscribe(
        (data: ResultModel[]) => {
          this.assessmentService.questions.forEach((e, i) => {
            const ctAns = data.filter(x => x.qnId === e.qnId);
            if (e.choosenAnswer === ctAns[0].correctAnswer) {
              this.assessmentService.correctAnswerCount++;
              e.correctAnswer = ctAns[0].correctAnswer;
              if (!this.categoryWiseData.has(e.category)) {
                this.categoryWiseData.set(e.category, 1);
              } else {
                this.categoryWiseData.set(e.category, this.categoryWiseData.get(e.category) + 1);
              }
            }
          });
          this.chartDataCollection();
        }
      );
    } else {
      this.restart();
    }
  }

  restart(): void {
    this.router.navigate(['AssessmentEngine']);
    this.assessmentService.questionProgress = 0;
    this.assessmentService.correctAnswerCount = 0;
  }
  chartDataCollection(): void {
    const uniqueCategory: string[] = [...new Set(this.assessmentService.questions.map(x => x.category))];
    const categoryWiseCorrectAnswer: number[] = [];
    uniqueCategory.forEach(x => categoryWiseCorrectAnswer.push(this.categoryWiseData.get(x)));
    this.pieChartdata = {
      labels: uniqueCategory,
      datasets: [
        {
          data: categoryWiseCorrectAnswer,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }
}
