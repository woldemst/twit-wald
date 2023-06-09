import TweetItem from "./TweetItem";
import Card from "../../shared/UIElements/Card";

const tweetList = (props) => {
    if (props.items.length === 0) {
        return (
          <div className="place-list center">
            <Card>
              <h2>No places found. Maybe create one?</h2>
            </Card>
          </div>
        );
      }

    return (

        <div className="tweets">
            {props.items.map(tweet => (
                <TweetItem
                    key={tweet.id}
                    id={tweet.id}
                    creatorId={tweet.creatorId}
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