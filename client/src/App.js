import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { useCallback, useState, useContext } from "react";
import { AuthContext } from "./shared/context/auth-context";

import Main from "./layout/columns/Main";
import UserPage from "./user/pages/UserPage";
import AsideRight from "./layout/columns/AsideRight";
import CertainTweet from "./tweets/pages/CertainTweet";
import Auth from "./user/components/dialogs/Auth";

import MainHeader from "./layout/components/Navigation/MainHeader";
import Modal from "./shared/UIElements/Modal";
import Button from "./shared/FormElements/Button";

import "./App.scss";
// import Start from "./pages/Start";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState(false)

  const [showAuthForm, setShowAuthForm] = useState(false);
  const auth = useContext(AuthContext)

  const login = useCallback((uid) => {
    setIsLoggedIn(true)
    setUserId(uid)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setUserId(null)
  }, [])

  // for pop up to go to the start page 
  // const navigate = useNavigate()
  // const goToStartPage = ()=>{

  // }

  return ( 
    <>
      <AuthContext.Provider value={{isLoggedIn:isLoggedIn, userId: userId, login:login, logout:logout}} >
        <BrowserRouter>
          <div className="main-container">
            <MainHeader />
            <main className="content">
              <div className="main-feed column">
                <Routes>
                  {/* <Route path="/"  element={<Start />} exact /> */}
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

          {/* if not logged in START */}
          {/* <Modal
            show={!isLoggedIn}
            onClose={() => setIsLoggedIn()}
            contentClass="auth-item__modal-content"
            // header={
            //   <Button
            //     content="✕"
            //     className="close"
            //     // onClick={() => setShowAuthForm(false)}
            //     onClick={goToStartPage}
            //   />
            // }
          >
            <Auth  />
          </Modal> */}
          {/* if not logged in END */}

        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
