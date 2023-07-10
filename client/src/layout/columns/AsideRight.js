import LogingWindow from "../components/LogingWindow";
import { AuthContext } from "../../shared/context/auth-context";
import "./AsideRight.scss";
import { useContext } from "react";

const AsideRight = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <div className="aside-content">{auth.isLoggedIn && <LogingWindow />}</div>
    </>
  );
};

export default AsideRight;
