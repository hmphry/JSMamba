interface ButtonProps {
  children: JSX.Element,
  clickHandler: Function
  className?: string,
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.clickHandler} className={`border-2 px-6 py-2 rounded-md cursor-pointer ${props.className}`}>
        {props.children}
    </button>
  )
}

export default Button;