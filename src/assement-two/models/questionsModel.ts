export class QuestionsModel {
    category: string;
    qnId: number;
    qnName: string;
    options: string[];
    choosenAnswer: number;
    correctAnswer?: number;
}
