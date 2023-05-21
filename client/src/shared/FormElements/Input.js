import { useState } from "react"

const Input = props => {

    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')

    const handleNameChange = event => {
        setName(event.target.value)
        // console.log(name);
    }

    return (
        <input 
            type="text" 
            name={name} 
            onChange={handleNameChange}
        />
    )
}

export default Input;