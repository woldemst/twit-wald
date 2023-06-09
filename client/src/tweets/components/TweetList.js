import TweetItem from "./TweetItem";

const tweetList = (props) => {


    return (

        <div className="tweets">
            {props.items.map(tweet => (
                <TweetItem
                    key={tweet.id}
                    id={tweet.id}
                    creatorId={tweet.creator.id}
                    creatorImage={tweet.creator.image}
                    creatorName={tweet.creator.name}
                    creatorNickname={tweet.creator.nickname}
                    posted={tweet.postedDate}
                    description={tweet.description}
                    imageUrl={tweet.imageUrl}



                />
            ))}
        </div>
    )
}

export default tweetList;