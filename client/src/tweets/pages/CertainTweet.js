

import { useParams } from "react-router-dom";
import TweetPageList from "../components/TweetPageList";
import { useEffect, useState } from "react";
import axios from "axios";



const CertainTweet = () => {
  const [fetchedTweets, setFetchedTweets] = useState([])

  useEffect(()=>{
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

  console.log(fetchedTweets);

  const { tweetId } = useParams();
  const loadedtweet = fetchedTweets.filter((tweet) => tweet._id === tweetId);
  console.log(loadedtweet);
  return <TweetPageList items={loadedtweet} />;
};

export default CertainTweet;
