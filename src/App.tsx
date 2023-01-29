import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    // console.log(cardRef.current.classList.add(""))
    setFlipped( !flipped );
  }

  return (
    <div className="App bg-yellow-200">
      <div className='w-full max-w-7xl px-8 lg:px-0 lg:mx-auto'>
        <div className='grid grid-cols-8 gap-8 h-screen items-center'>
          <div className='col-span-3'>
            <h1 className='mb-4 text-2xl text-purple-700'>JSMamba</h1>
            <p className='pb-2'>"It's not about the number of hours you practice, it's about the number of hours your mind is present during the practice."</p>
          </div>
          <div className='col-span-5'>
            <div className={`transform-gpu transition-all duration-500 [transform-style:preserve-3d] bg-white rounded-md p-8 shadow-lg ${flipped ? '[transform:rotateY(180deg)]' : false}`}>
              <div className='[backface-visibility:hidden]'>
                <p className='mb-2 text-sm text-gray-400'>Question 1 of 10</p>
                <p className='text-2xl'>The Array.pop() method removes the last element from an array and returns that element. This method changes the length of the array.</p>
                <div className='flex justify-center gap-4 mt-8'>
                  <Button clickHandler={handleClick} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">True</Button>
                  <Button clickHandler={handleClick} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">False</Button>
                  <Button clickHandler={handleClick} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">Unsure</Button>
                </div>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                <div>
                  <p className='text-2xl text-center'>That was <span>correct!</span></p>
                  <div className='flex justify-center mt-8'>
                    <Button clickHandler={handleClick}>Next Question</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default App
