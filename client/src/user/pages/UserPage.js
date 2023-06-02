import UserTwitts from '../../tweets/pages/UserTwitts'
import UserProfile from './UserProfile'

const UserPage = props =>{
    return (
        <>
        <UserProfile />
        <UserTwitts />
        </>
    )
}
export default UserPage