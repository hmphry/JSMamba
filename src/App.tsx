import { useState, useEffect } from 'react'
import QuestionPlate from './components/QuestionPlate'
import AnswerPlate from './components/AnswerPlate'


function App() {
  const [flipped, setFlipped] = useState(false);
  const [lastResult, setLastResult] = useState(false);
  const [question, setQuestion] = useState({});
  const [questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    getQuestion()
  }, [])
  

  function getQuote() {}
  function getQuestionSet() {
    setQuestionCount( false )
  }
  function getQuestion() {
    setQuestionCount( "1" )
    setQuestion({
      text: "The Array.pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
      correct_answer: true
    })
  }
  function answerQuestion(response:unknown) {
    if(response === question.correct_answer) {
      console.log("Yay!");
      setFlipped( true );
      setLastResult( "correct" );
    } else if(response === "skip") {
      console.log("No worries!");
      setFlipped( true );
    } else {
      console.log("Better luck next time!");
      setFlipped( true );
      setLastResult( "incorrect" );
    }
  }
  function nextQuestion() {
    setFlipped( false );
    setLastResult( false );
  }

  return (
    <div className="App bg-yellow-200">
      <div className='w-full max-w-7xl px-8 lg:mx-auto'>
        <div className='grid grid-cols-8 gap-8 h-screen items-center'>
          <div className='col-span-3'>
            <h1 className='mb-4 text-2xl text-purple-700'>JSMamba</h1>
            <p className='pb-2'>"It's not about the number of hours you practice, it's about the number of hours your mind is present during the practice."</p>
          </div>
          <div className='col-span-5'>
            <div className={`transform-gpu transition-all duration-500 [transform-style:preserve-3d] bg-white rounded-md p-8 shadow-lg ${flipped ? '[transform:rotateY(180deg)]' : false}`}>
              <QuestionPlate count={questionCount} question={question.text} handleAnswer={answerQuestion}></QuestionPlate>
              <AnswerPlate result={lastResult} nextQuestion={nextQuestion}></AnswerPlate>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default App
