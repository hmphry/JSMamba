import React, { useState } from 'react'
import QuestionResult from './QuestionResult'
import Button from './Button'

interface ReportProps{
    results: Array<Object>;
    newMamba: Function;
}

const ReportCard = (props:ReportProps) => {

    const correctAmount = props.results.filter(x => x.result === "correct").length;

    return (
        <div className={`transform-gpu transition-all duration-500 [transform-style:preserve-3d] bg-white rounded-md p-8 shadow-lg`}>
            <h1 className='text-xl'>You answered {correctAmount === 1 ? `1 question` : `${correctAmount} questions`} correctly. </h1>
            <p className='text-gray-400'>Here are the areas you need to work on:</p>
            <ul className='pt-4'>
                {props.results.filter(x => x.result === "incorrect" || x.result === "skip").map((x,i) => {
                    return <QuestionResult key={`question-${i}`} question={x.question} />
                })}
            </ul>
            <div className='flex justify-center'>
                <Button clickHandler={()=>{props.newMamba()}} className="border-purple-400 text-purple-400 hover:border-gray-800 hover:text-gray-800">Start A New Mamba</Button>
            </div>
        </div>
    )
  }
  
  export default ReportCard;