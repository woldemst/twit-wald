import './Button.scss'

const Button = props => {
    return (
        <button
            className={`button button-${props.className}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}

        >
            {props.content}
        </button>
    )
}

export default Button;