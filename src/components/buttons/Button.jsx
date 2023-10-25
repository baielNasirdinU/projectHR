const Button = (props) => {
  return (
    <div>
        <button  className="relative"
         >
      
            {props.children}
        </button>
    </div>
  )
}

export default Button