import questions from '../questions/questions.json'

type Question = {
    answer: string,
    resources: Array<string>,
    text: string
}

type Result = {
    question: Question,
    result: string
  }

class Mamba {
    currentQuestion!: Question | boolean;
    questionSet!: Array<Question>;
    resultSet!: Array<Result>;
    constructor(length:number){
        this.generateQuestions(length);
        this.askQuestion();
        return this;
    }
    generateQuestions(length:number){
        this.questionSet = questions.sort(() => 0.5 - Math.random()).slice(0, length);
    }
    askQuestion(){
        this.currentQuestion = this.questionSet.length > 0 ? this.questionSet.pop(0,1) : false;
        return this.currentQuestion;
    }
    answerQuestion(answer:string){
        let result;
        if(answer == "skip") result = "skipped";
        if(answer == this.currentQuestion.answer){
            result = "correct"
        } else {
            result = "incorrect"
        }
        this.resultSet.push({
            question: this.currentQuestion,
            result: result
        })
        return this.askQuestion();
    }
}


export default Mamba;