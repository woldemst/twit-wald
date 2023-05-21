import Card from "../../shared/UIElements/Card"
import Modal from "../../shared/UIElements/Modal"
import Input from "../../shared/FormElements/Input"
import Button from "../../shared/FormElements/Button"

const Auth = props => {


    const authSubmitHandler = event => {
        event.preventDefault();
    }
    return (
        <>
            <Card className="authentication">
                <form onSubmit={authSubmitHandler}>
                    <Input 
                        type='text' 
                        id='name' 
                        name='name'
                        label='Name'
                    />

                    <Input 
                        type='email' 
                        id='email' 
                        name='email'
                    />

                    <Button text="Sign up" />
                </form>
            </Card>
        </>
    )
}

export default Auth;