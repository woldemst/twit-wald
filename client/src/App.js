import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { useCallback, useState, useContext, useEffect } from "react";
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
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  const auth = useContext(AuthContext);
  const [showAuthForm, setShowAuthForm] = useState(auth.isLoggedIn);

  const [userId, setUserId] = useState(false);
  const [token, setToken] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    setShowAuthForm(true);

    localStorage.setItem(
      "userData",
      JSON.stringify({ userId: uid, token: token })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setShowAuthForm(false);

    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData.userId, storedData.token);
    }
  }, [login]);

  // for pop up to go to the start page
  // const navigate = useNavigate()
  // const goToStartPage = ()=>{

  // }

  const deprecateClick = (event) => {
    event.stopPropagation();
  }

  // console.log(auth.isLoggedIn);
  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          userId: userId,
          token: token,
          login: login,
          logout: logout,
        }}
      >
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
          <Modal
            show={!showAuthForm}
            contentClass="auth-item__modal-content"
            modalClassName="auth"
            onClose={() => deprecateClick }
            bgClass="auth"
            // header={
            //   <Button
            //     content="✕"
            //     className="close"
            //     // onClick={() => setShowAuthForm(false)}
            //     onClick={goToStartPage}
            //   />
            // }
          >
            <Auth />
          </Modal>
          {/* if not logged in END */}
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
