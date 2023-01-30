import { useState } from 'react'
import Button from './Button'

const ReportCard = () => {
    return (
        <div className={`transform-gpu transition-all duration-500 [transform-style:preserve-3d] bg-white rounded-md p-8 shadow-lg`}>
            <h1 className='text-xl'>You got 3 questions correct!</h1>
            <p className='pt-4'>Questions that need work:</p>
            <ul className='pt-4 pl-4'>
                <li className='pb-12'>
                    <p className='text-purple-400 text-sm tracking-widest uppercase'>Question</p>
                    <p className='pb-4'>Question 1: The Array.pop() method removes the last element from an array and returns that element. This method changes the length of the original array.</p>
                    <div className='flex justify-start gap-4'>
                        <div>
                            <p className='text-purple-400 text-sm tracking-widest uppercase'>Your Answer</p>
                            <p className='pb-4'>True</p>
                        </div>
                        <div>
                            <p className='text-purple-400 text-sm tracking-widest uppercase'>Correct Answer</p>
                            <p className='pb-4'>False</p>
                        </div>
                    </div>
                    <p className='text-purple-400 text-sm tracking-widest uppercase'>Further Resources</p>
                    <ul>
                        <li>Resource 1</li>
                        <li>Resource 2</li>
                    </ul>
                </li>
                <li className='pb-4'>
                    <p className='text-purple-400 text-sm tracking-widest uppercase'>Question</p>
                    <p className='pb-4'>Question 1: The Array.pop() method removes the last element from an array and returns that element. This method changes the length of the original array.</p>
                    <div className='flex justify-start gap-4'>
                        <div>
                            <p className='text-purple-400 text-sm tracking-widest uppercase'>Your Answer</p>
                            <p className='pb-4'>True</p>
                        </div>
                        <div>
                            <p className='text-purple-400 text-sm tracking-widest uppercase'>Correct Answer</p>
                            <p className='pb-4'>False</p>
                        </div>
                    </div>
                    <p className='text-purple-400 text-sm tracking-widest uppercase'>Further Resources</p>
                    <ul>
                        <li>Resource 1</li>
                        <li>Resource 2</li>
                    </ul>
                </li>
            </ul>
            <p className='pt-8'>Questions you were solid on:</p>
            <ul className='pt-4 pl-4'>
                <li className='pb-12'>
                    <p className='text-purple-400 text-sm tracking-widest uppercase'>Question</p>
                    <p className='pb-4'>Question 1: The Array.pop() method removes the last element from an array and returns that element. This method changes the length of the original array.</p>
                    <div className='flex justify-start gap-4'>
                        <div>
                            <p className='text-purple-400 text-sm tracking-widest uppercase'>Your Answer</p>
                            <p className='pb-4'>True</p>
                        </div>
                        <div>
                            <p className='text-purple-400 text-sm tracking-widest uppercase'>Correct Answer</p>
                            <p className='pb-4'>False</p>
                        </div>
                    </div>
                    <p className='text-purple-400 text-sm tracking-widest uppercase'>Further Resources</p>
                    <ul>
                        <li>Resource 1</li>
                        <li>Resource 2</li>
                    </ul>
                </li>
                <li className='pb-4'>
                    <p className='text-purple-400 text-sm tracking-widest uppercase'>Question</p>
                    <p className='pb-4'>Question 1: The Array.pop() method removes the last element from an array and returns that element. This method changes the length of the original array.</p>
                    <div className='flex justify-start gap-4'>
                        <div>
                            <p className='text-purple-400 text-sm tracking-widest uppercase'>Your Answer</p>
                            <p className='pb-4'>True</p>
                        </div>
                        <div>
                            <p className='text-purple-400 text-sm tracking-widest uppercase'>Correct Answer</p>
                            <p className='pb-4'>False</p>
                        </div>
                    </div>
                    <p className='text-purple-400 text-sm tracking-widest uppercase'>Further Resources</p>
                    <ul>
                        <li>Resource 1</li>
                        <li>Resource 2</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
  }
  
  export default ReportCard;