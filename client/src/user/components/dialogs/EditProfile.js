import Input from "../../../shared/FormElements/Input";
import Card from "../../../shared/UIElements/Card";

const EditProfile = () =>{
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
                        value="Waldemar"
                    />

                    <Input 
                        type="text"
                        id='editBio'
                        name='editBio'
                        label='Bio'
                        placeholder="That's my official page"
                        value=""
                    />

                    <Input 
                        type="text"
                        id='editLocation'
                        name='editLocation'
                        label='Location'
                        placeholder="Germany"
                        value=""
                    />

                    <Input 
                        type="text"
                        id='editWebsite'
                        name='editWebsite'
                        label='Website'
                        placeholder="https://github.com/woldemst"
                        value=""
                    />

                </form>
            </Card>
        </>
    )
}

export default EditProfile;