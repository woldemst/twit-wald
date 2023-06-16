import Input from "../../../shared/FormElements/Input";
import Card from "../../../shared/UIElements/Card";
import { USERS } from "../../pages/UserProfile";

import { VALIDATOR_MINLENGTH } from "../../../shared/util/validators";
import { useCallback } from "react";

const EditProfile = () =>{


    const editeHandler = useCallback((id, value, isValid) => {

    }, [])
    
    return(
        <>
            <Card className="edit-profile">
                <form className="edit-form">
                    <Input 
                        id='editUserName'
                        element='input'
                        type="text"
                        name='editUserName'
                        label='Name'
                        onInput={editeHandler}
                        validators={[VALIDATOR_MINLENGTH(4)]}
                        errorText="Please enter a valid user name"
                    />

                    <Input 
                        element='input'
                        type="text"
                        id='editBio'
                        name='editBio'
                        label='Bio'
                        errorText="Please enter a valid text"
                    />

                    <Input 
                        element='input'
                        type="text"
                        id='editLocation'
                        name='editLocation'
                        label='Location'
                        errorText="Please enter a valid Location"
                    />

                    <Input 
                        element='input'
                        type="text"
                        id='editWebsite'
                        name='editWebsite'
                        label='Website'
                        errorText="Please enter a valid Webseite"
                    />

                </form>
            </Card>
        </>
    )
}

export default EditProfile;