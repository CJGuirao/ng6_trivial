export class Card {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    answers: string[];
    responded: boolean;
    correct: boolean;
    constructor(data: any) {
        this.category = data.category;
        this.type = data.type;
        this.difficulty = data.difficulty;
        this.question =  data.question;
        this.correct_answer =  data.correct_answer;
        this.answers = data.incorrect_answers;
        this.answers.push(this.correct_answer);
        this.responded = false;
        this.correct = false;
    }
}
