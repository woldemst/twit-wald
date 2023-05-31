import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./columns/Main";
import UserProfile from "./user/pages/UserProfile";
import AsideRight from "./columns/AsideRight";
// import PrimaryColumn from './columns/PrimaryColumn'

// import Auth from './user/pages/Auth';

import "./App.scss";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <MainNavigation />
        <main className="content">
          <div className="main-feed column">
            <Routes>
              <Route path="/" element={<Main />} exact />
              <Route path="/profile" element={<UserProfile />} />
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
