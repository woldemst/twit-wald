import TweetPage from "../pages/TweetPage"

const TweetPageList = (props) => {
    return (
        <>
            {props.items.map(tweet => (
                
                <TweetPage
                    key={tweet._id}
                    id={tweet._id}
                    creatorId={tweet.creatorId}
                    creatorImage={tweet.creator.image}
                    creatorName={tweet.creator.name}
                    creatorNickname={tweet.creator.nickname}
                    posted={tweet.postedDate}
                    description={tweet.description}
                    imageUrl={tweet.imageUrl}

                />
            ))}
        </>
    )
}

export default TweetPageList;