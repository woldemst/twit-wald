import Card from "../../../shared/UIElements/Card";


import "./DeleteTweet.scss";

const DeleteTweet = (props) => {
  return (
    <>
      <Card className="warning-card">

        <div className="warning">
          <div className="warning__content">
            This can’t be undone and it will be removed from your profile, the
            timeline of any accounts that follow you, and from Twitter search
            results.
          </div>
        </div>
      </Card>
    </>
  );
};
export default DeleteTweet;
