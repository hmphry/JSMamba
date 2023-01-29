import { useState } from 'react'
import Button from './Button'

const QuestionPlate = ({count, question, handleAnswer, nextQuestion}) => {
    const [flipped, setFlipped] = useState(false);

    function handleClick(answer: unknown) {
        handleAnswer( answer );
        setFlipped( true );
    }

    function handleNext(){
        nextQuestion()
        setFlipped( false );
    }

    return (
        <div className={`transform-gpu transition-all duration-500 [transform-style:preserve-3d] bg-white rounded-md p-8 shadow-lg ${flipped ? '[transform:rotateY(180deg)]' : false}`}>
            <div className='[backface-visibility:hidden]'>
                <p className='mb-2 text-sm text-gray-400'>Question {count} of 10</p>
                <p className='text-2xl'>{question}</p>
                <div className='flex justify-center gap-4 mt-8'>
                    <Button clickHandler={() => handleClick(true)} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">True</Button>
                    <Button clickHandler={() => handleClick(false)} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">False</Button>
                    <Button clickHandler={() => handleClick("skip")} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">Unsure</Button>
                </div>
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                <div>
                    <p className='text-2xl text-center'>That was <span>correct!</span></p>
                    <div className='flex justify-center mt-8'>
                    <Button clickHandler={handleNext}>Next Question</Button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default QuestionPlate;