import TwittItem from "./TwittItem";

const TwittList = (props) => {


    return (

        <div className="twitts">
            {props.items.map(twitt => (
                <TwittItem
                    key={twitt.id}
                    id={twitt.id}
                    creatorId={twitt.creator.id}
                    creatorImage={twitt.creator.image}
                    creatorName={twitt.creator.name}
                    creatorNickname={twitt.creator.nickname}
                    posted={twitt.postedDate}
                    description={twitt.description}
                    imageUrl={twitt.imageUrl}



                />
            ))}
        </div>
    )
}

export default TwittList;