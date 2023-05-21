import Navigation from "../shared/components/Navigation";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <div className="main-container">
        <div className="main-column aside-left">
          <div className="logo">TwitWald!</div>

          <Navigation />
        </div>
        <div className="main-column main-content">main</div>
        <div className="main-column aside-right">Aside Right</div>
      </div>
    </>
  );
}
