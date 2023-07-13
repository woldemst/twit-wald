import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./layout/columns/Main";
import UserPage from "./user/pages/UserPage";
import AsideRight from "./layout/columns/AsideRight";

import "./App.scss";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import TweetItem from "./tweets/components/TweetItem";
import Usertweets from "./tweets/pages/UserTweets";
import TweetPage from "./tweets/pages/TweetPage";
import CertainTweet from "./tweets/pages/CertainTweet";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <MainNavigation />
        <main className="content">
          <div className="main-feed column">
            <Routes>
              <Route path="/" element={<Main />} exact />
              <Route path="/profile" element={<UserPage />} exact />
              <Route path="/profile/status/:tweetId" element={<CertainTweet /> } />
            </Routes>
          </div>
          <div className="column aside-right">
            <AsideRight />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
