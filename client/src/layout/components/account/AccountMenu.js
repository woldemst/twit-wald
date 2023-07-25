import { useEffect, useState, useContext} from "react";
import axios from "axios";

import { AuthContext } from "../../../shared/context/auth-context";
import Dropdown from "../../../shared/FormElements/Dropdown"
import Avatar from "../../../shared/UIElements/Avatar";

import './AccountMenu.scss'

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

  const identidiedUser = fetchedUsers.find(u => u._id === auth.userId)
  // const mappedUser = identidiedUser.map(u => u.image)
  console.log(identidiedUser);



  //Dropdown content
  // dropdown states 
  const [selectedOption, setSelectedOption] = useState(null);
  
  const options = [

    { value: "option1", label: `Log out @${identidiedUser?.nickname}`, onClick:() => auth.logout() }
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
            <Avatar image={identidiedUser?.image} width="45px" height="45px" />
        </div>

        <div className="account-info_container">
          <p>{identidiedUser?.name}</p>
          <p>@{identidiedUser?.nickname}</p>
        </div>
        
        <div className="account-options__container">
          <Dropdown options={options} onSelect={handleOptionSelect} className="account" />
        </div>
      </div>
    </>
  );
};

export default AccountMenu;
