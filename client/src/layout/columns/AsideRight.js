import { useContext } from "react";

import { AuthContext } from "../../shared/context/auth-context";
import LogingWindow from "../components/LogingWindow";

import "./AsideRight.scss";

const AsideRight = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <div className="aside-content">{!auth.isLoggedIn && <LogingWindow />}</div>
    </>
  );
};

export default AsideRight;
