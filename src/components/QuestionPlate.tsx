import { useState } from 'react'
import Button from './Button'

const QuestionPlate = ({count, question, handleAnswer,}) => {
    const [flipped, setFlipped] = useState(false);

    function handleClick(answer: unknown) {
        handleAnswer( answer );
        setFlipped( true );
    }

    return (
        <div className='[backface-visibility:hidden]'>
            <p className='mb-2 text-sm text-gray-400'>Question {count} of 10</p>
            <p className='text-2xl'>{question}</p>
            <div className='flex justify-center gap-4 mt-8'>
                <Button clickHandler={() => handleClick("true")} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">True</Button>
                <Button clickHandler={() => handleClick("false")} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">False</Button>
                <Button clickHandler={() => handleClick("skip")} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">Unsure</Button>
            </div>
        </div>
    )
  }
  
  export default QuestionPlate;