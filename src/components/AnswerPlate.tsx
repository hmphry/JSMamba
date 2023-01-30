import { useState } from 'react'
import Button from './Button'

interface AnswerProps {
    result: string,
    nextQuestion: Function
}

const AnswerPlate = (props: AnswerProps) => {

    function handleNext(){
        props.nextQuestion()
    }

    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]'>
            <div>
                { props.result && <p className='text-2xl text-center'>That was <span>{props.result}</span></p> }
                <div className='flex justify-center mt-8'>
                    <Button clickHandler={handleNext}>Next Question</Button>
                </div>
            </div>
        </div>
    )
  }
  
  export default AnswerPlate;