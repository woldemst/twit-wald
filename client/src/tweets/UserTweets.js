
const DUMMY_TWEETS = [
    {
        id: 't1',
        title: 'One Year Ago',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        creator: 'u1'
      },
    {
        id: 't2',
        title: 'One Year Ago',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        creator: 'u2'
      },
]
const UserTweets = () => {

    const loadedTweets = DUMMY_TWEETS.filter(tweet => tweet.creator)
    return (
        <>

        </>
    )
}

export default UserTweets;