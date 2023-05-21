

const Button = props => {
    return ( 
        <button 
            className={`button button-${props.size}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        
        >
            {props.text}
        </button>
    )
}

export default Button;