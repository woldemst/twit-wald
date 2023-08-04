import { useEffect, useState, useContext} from "react";
import axios from "axios";

import { AuthContext } from "../../../shared/context/auth-context";
import Dropdown from "../../../shared/FormElements/Dropdown"
import Avatar from "../../../shared/UIElements/Avatar";

import './AccountMenu.scss'
import Modal from "../../../shared/UIElements/Modal";
import Button from "../../../shared/FormElements/Button";
import LogOut from "../../../user/components/dialogs/account/LogOut";

const AccountMenu = (props) => {
    const auth = useContext(AuthContext)
    const [fetchedUsers, setFetschedUsers] = useState([])

    useEffect(() => {
        
    //function for fetching al of the user from backend
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users')
            setFetschedUsers(response.data)
            // console.log(response.data);
        } catch (err) {
          console.log('Error fetching users', err);
        }
      }

    fetchUsers()
    }, [])

  const identifiedUser = fetchedUsers.find(u => u._id === auth.userId)
  // const mappedUser = identifiedUser.map(u => u.image)
  // console.log(identifiedUser);



  //Dropdown content
  // dropdown states 
  const [selectedOption, setSelectedOption] = useState(null);
  
  const options = [
    { value: "option1", label: `Log out @${identifiedUser?.nickname}`, onClick:() => setShowLogoutDiolog(true) }
  ];
  
  // dropdown's trigger 
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  //Log out diolog window
  const [showLogoutDiolog, setShowLogoutDiolog] = useState(false)


  return (
    <>
      <div className="account-menu__container">
        <div className="account-avatar__container">
            <Avatar image={identifiedUser?.image} width="45px" height="45px" />
        </div>

        <div className="account-info_container">
          <p>{identifiedUser?.name}</p>
          <p>{identifiedUser?.nickname && "@"+identifiedUser.nickname}</p>
        </div>
        
        <div className="account-options__container">
          <Dropdown options={options} onSelect={handleOptionSelect} className="account" />
        </div>
      </div>

      {/* Log out diolog  */}
      <Modal
        show={showLogoutDiolog}
        headerClassName='warning__headline'
        header={<h2>Log out of TwittWald?</h2>}
        modalClassName='confirmation'
        contentClass="delte-item__modal-content"
        footer={<>
          <div className="button-container">
            <Button content='Log out' className='log_out' onClick={()=> auth.logout()} />
            <Button content='Cancel' className='cancel' onClick={()=> setShowLogoutDiolog(false)} />
          </div>
        </>}
        >
          <LogOut />
      </Modal>
    </>
  );
};

export default AccountMenu;
