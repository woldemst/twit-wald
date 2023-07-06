import TweetList from "../../tweets/components/TweetList";
import { TWEETS } from "../../user/pages/UserPage";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <div className="column main-content">
        <TweetList items={TWEETS} />
      </div>

    </>
  );
}
