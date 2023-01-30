import { useState, useEffect } from 'react'
import QuestionPlate from './components/QuestionPlate'
import AnswerPlate from './components/AnswerPlate'
import ReportCard from './components/ReportCard'
import questions from './questions/questions.json'

type Question = {
  answer: string,
  resources: Array<string>,
  text: string
}

type Result = {
  question: Question,
  result: string
}

let questionSet: Array<Question> = [];
let results: Array<Result> = [];
const quizLength: number = 3;


function App() {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<boolean | string>(false);
  const [question, setQuestion] = useState<Question | boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(0);

  useEffect(() => {
    if(questionSet.length === 0 && questions.length > 0) {
      getQuestionSet()
    }
  }, [])
  
  function getQuote() {}
  function getQuestionSet() {
    questionSet = questions.sort(() => 0.5 - Math.random()).slice(0, quizLength);
    setQuestionCount(0);
    getNewQuestion();
  }
  function getNewQuestion() {
    if( questionSet.length == 0) {
      setShowReport( true );
      console.log( results )
      setQuestion( false );
      return false;
    }
    const newQuestion: Question = questionSet.pop(0,1);
    setQuestionCount( questionCount + 1 );
    setQuestion( newQuestion );
  }
  function answerQuestion(response:string) {
    if(response == question.answer) {
      results.push({question, result: "correct"})
      setFlipped( true );
      setLastResult( "correct" );
    } else if(response === "skip") {
      results.push({question, result: "skip"})
      setFlipped( true );
      setLastResult( "skipped" );
    } else {
      results.push({question, result: "incorrect"})
      setFlipped( true );
      setLastResult( "incorrect" );
    }
  }
  function nextQuestion() {
    getNewQuestion();
    setFlipped( false );
    setLastResult( false );
  }
  

  return (
    <div className="App bg-yellow-200">
      <div className='w-full max-w-7xl px-8 lg:mx-auto'>
        <div className='grid grid-cols-8 gap-8 min-h-screen items-center'>
          <div className='col-span-3'>
            <h1 className='mb-4 text-2xl text-purple-700'>JSMamba</h1>
            <p className='pb-2'>"It's not about the number of hours you practice, it's about the number of hours your mind is present during the practice."</p>
          </div>
          <div className='col-span-5 py-4'>
              { !question &&
                <div className={`transform-gpu transition-all duration-500 [transform-style:preserve-3d] bg-white rounded-md p-8 shadow-lg ${flipped ? '[transform:rotateY(180deg)]' : false}`}>
                  <QuestionPlate count={questionCount} quizLength={quizLength} question={question.text} handleAnswer={answerQuestion}></QuestionPlate>
                  <AnswerPlate result={lastResult} nextQuestion={nextQuestion}></AnswerPlate>
                </div>
              }
              { !showReport && <ReportCard /> }
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default App
