import Button from './Button';

interface QuestionProps {
    count: number,
    quizLength: number,
    question: string,
    handleAnswer: Function
}

const QuestionPlate = (props: QuestionProps) => {

    function handleClick(answer: unknown) {
        props.handleAnswer( answer );
    }

    return (
        <div className='[backface-visibility:hidden]'>
            <p className='mb-2 text-sm text-gray-400'>Question {props.count} of {props.quizLength}</p>
            <p className='text-2xl'>{props.question}</p>
            <div className='flex flex-wrap justify-center gap-4 mt-8'>
                <Button clickHandler={() => handleClick("true")} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">True</Button>
                <Button clickHandler={() => handleClick("false")} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">False</Button>
                <Button clickHandler={() => handleClick("skip")} className="border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800">Unsure</Button>
            </div>
        </div>
    )
  }
  
  export default QuestionPlate;