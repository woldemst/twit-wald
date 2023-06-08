import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./layout/columns/Main";
import UserPage from "./user/pages/UserPage";
import AsideRight from "./layout/columns/AsideRight";

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
              <Route path="/profile" element={<UserPage />} exact />
              {/* <Route path="/:userId/twitts" /> */}
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
