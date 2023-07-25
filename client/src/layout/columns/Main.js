import { useEffect, useState } from "react";
import axios from "axios";

import TweetList from "../../tweets/components/TweetList";

import "./Main.scss";

export default function Main() {
  const [fetchedTweets, setFetchedTweets] = useState([])

  useEffect(() => {

  // function for fetching all of the tweets
  const fetchTweets = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tweets')
      setFetchedTweets(response.data)
    } catch (err) {
      console.log('Error fetching tweets', err)
      
    }
  }

  fetchTweets()
  }, [])

  const loadedtweets = fetchedTweets.map((t) => t)
  console.log(fetchedTweets);
  return (
    <>
      <div className="column main-content">
        <TweetList items={loadedtweets} />
      </div>

    </>
  );
}
