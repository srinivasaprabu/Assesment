import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionsModel } from '../models/questionsModel';
import { ResultModel } from '../models/resultModel';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  questions: QuestionsModel[];
  questionProgress = 0;
  correctAnswerCount = 0;
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<QuestionsModel[]> {
    return this.http.get<QuestionsModel[]>(`${environment.devUrl}/assets/jsons/questionBank.json`);
  }

  getAnswers(): Observable<ResultModel[]> {
    return this.http.get<ResultModel[]>(`${environment.devUrl}/assets/jsons/resultSet.json`);
  }


}
