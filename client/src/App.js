import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useCallback, useState } from "react";
import { AuthContext } from "./shared/context/auth-context";

import Main from "./layout/columns/Main";
import UserPage from "./user/pages/UserPage";
import AsideRight from "./layout/columns/AsideRight";
import CertainTweet from "./tweets/pages/CertainTweet";
import MainHeader from "./layout/components/Navigation/MainHeader";

import "./App.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(false)

  const login = useCallback((uid) => {
    setIsLoggedIn(true)
    setUserId(uid)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setUserId(null)
  }, [])


  return ( 
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, userId: userId, login:login, logout:logout}} >
      <BrowserRouter>
        <div className="main-container">
          <MainHeader />
          <main className="content">
            <div className="main-feed column">
              <Routes>
                <Route path="/" element={<Main />} exact />
                <Route path="/:userId" element={<UserPage />} exact />
                <Route
                  path="/:userId/status/:tweetId"
                  element={<CertainTweet />}
                />
              </Routes>
            </div>
            <div className="column aside-right">
              <AsideRight />
            </div>
          </main>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
