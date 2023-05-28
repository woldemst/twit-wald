import Header from "../shared/components/Header";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import PrimaryColumn from "./PrimaryColumn";

import "./Main.scss";

export default function Main() {
  return (
    <>
      <div className="main-container">
        <div className="column aside-left">
          <AsideLeft />
        </div>
        <div className="column main-content">
          <PrimaryColumn />
        </div>
        <div className="column aside-right">
          <AsideRight />
        </div>
      </div>
    </>
  );
}
