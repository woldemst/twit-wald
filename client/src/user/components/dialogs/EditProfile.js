import Input from "../../../shared/FormElements/Input";
import Card from "../../../shared/UIElements/Card";

import { USERS } from "../../pages/UserProfile";

const EditProfile = () =>{
    console.log(USERS);
    
    return(
        <>
            <Card className="edit-profile">
                <form className="edit-form">
                    <Input 
                        type="text"
                        id='editUserName'
                        name='editUserName'
                        label='Name'
                        placeholder='Name'
                        value=""
                    />

                    <Input 
                        type="text"
                        id='editBio'
                        name='editBio'
                        label='Bio'
                        placeholder="Bio"
                        value=""
                    />

                    <Input 
                        type="text"
                        id='editLocation'
                        name='editLocation'
                        label='Location'
                        placeholder="Location"
                        value=""
                    />

                    <Input 
                        type="text"
                        id='editWebsite'
                        name='editWebsite'
                        label='Website'
                        placeholder="Website"
                        value=""
                    />

                </form>
            </Card>
        </>
    )
}

export default EditProfile;