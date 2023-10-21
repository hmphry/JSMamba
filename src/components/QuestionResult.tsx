import { useState } from 'react'
import Button from './Button'

interface QuestionProps {
    key: any;
    question: any;
}

const QuestionResult = (props:QuestionProps) => {

    return (
        <li className='pb-6'>
            <p className='pb-4'>{props.question.text}</p>
            <div>
                <p className='text-gray-400 text-sm tracking-widest uppercase text-center'>Expected Answer</p>
                <p className='pb-4 text-black text-center uppercase'>{props.question.answer}</p>
            </div>
            <p className='text-gray-400 text-sm tracking-widest uppercase'>Further Resources</p>
            <ul className='pl-10'>
                {props.question.resources.map(x => <li key={x}><a href={x} className='text-purple-400 py-2'>{x}</a></li>)}
            </ul>
            <div className='mt-6 h-[1px] bg-gray-300'></div>
        </li>
    )
  }
  
  export default QuestionResult;