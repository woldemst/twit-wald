import TwittItem from "./TwittItem";

const TwittList = (props) => {


    return (

        <div className="twitt-container">
            {props.items.map(twitt => (
                <TwittItem
                    key={twitt.id}
                    id={twitt.id}
                    imageUrl={twitt.imageUrl}
                    title={twitt.title}

                />
            ))}
        </div>
    )
}

export default TwittList;