import { useEffect, useState } from 'react'
import AnswerPlate from './components/AnswerPlate'
import QuestionPlate from './components/QuestionPlate'
import ReportCard from './components/ReportCard'
import questions from './data/questions.json'

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
const quizLength: number = 10;


function App() {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<boolean | string>(false);
  const [question, setQuestion] = useState<Question | boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(0);

  useEffect(() => {
    newMamba()
  }, [])
  
  // TODO: Add quote list
  function getQuote() {}

  // Generates a new quiz
  function newMamba() {
    questionSet = [];
    results = [];
    setShowReport( false );
    getQuestionSet();
  }
  function getQuestionSet() {
    questionSet = questions.sort( () => 0.5 - Math.random() ).slice( 0, quizLength );
    getNewQuestion();
  }
  function getNewQuestion() {
    if( questionSet.length === 0 ) {
      setShowReport( true );
      setQuestion( false );
      return false;
    }
    if(showReport) {
      setQuestionCount( 1 );
    } else {
      setQuestionCount( questionCount + 1 );
    }
    setQuestion( questionSet.pop(0,1) );
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
    <div className="App">
      <div className='flex items-center w-full min-h-screen max-w-7xl px-8 lg:mx-auto'>
        <div className='grid grid-row-2 md:grid-row-1 md:grid-cols-8 gap-8 md:min-h-screen md:items-stretch'>
          <aside className='relative md:col-span-3'>
            <div className='md:sticky md:top-1/2 md:-translate-y-1/2'>
              <h1 className='mb-4 text-2xl text-purple-700'>JSMamba</h1>
              <p className='pb-2'>"It's not about the number of hours you practice, it's about the number of hours your mind is present during the practice."</p>
            </div>
          </aside>
          <main className='flex items-center md:col-span-5 py-4'>
              { question &&
                <div className={`transform-gpu transition-all duration-500 [transform-style:preserve-3d] bg-white rounded-md p-8 shadow-lg ${flipped ? '[transform:rotateY(180deg)]' : ""}`}>
                  <QuestionPlate count={questionCount} quizLength={quizLength} question={question !== true && question.text} handleAnswer={answerQuestion}></QuestionPlate>
                  <AnswerPlate result={lastResult} nextQuestion={nextQuestion}></AnswerPlate>
                </div>
              }
              { showReport && <ReportCard results={results} newMamba={newMamba} /> }
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
