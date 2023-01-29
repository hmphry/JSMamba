const Button = ({children, clickHandler, className}) => {
  return (
    <button onClick={clickHandler} className={`border-2 px-6 py-2 rounded-md cursor-pointer ${className}`}>
        {children}
    </button>
  )
}

export default Button;