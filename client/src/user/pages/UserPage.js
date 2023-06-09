import Usertweets from '../../tweets/pages/UserTweets'
import UserProfile from './UserProfile'

const UserPage = props => {
    return (
        <>
            <UserProfile />
            <Usertweets />
        </>
    )
}
export default UserPage