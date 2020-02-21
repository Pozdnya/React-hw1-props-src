import React from "react";
import "./App.css";
import profile from "./components/images/photo-profile.png";
import cat from "./components/images/GitHub-Mark-64px.png";
import logo from "./components/images/logo.png";
import ButtonPlus from "./components/ButtonPlus";
import ButtonMinus from "./components/ButtonMinus";
import Counter from "./components/Counter";

function App() {
  let [followers, setFollowers] = React.useState(2437);
  let [followig, setFollowig] = React.useState(549);
  let JohnDoe = "John Doe";
  return (
    <div className="wrapper">
      <div className="head">{JohnDoe}</div>
      <div className="cell">
        <div className="profile">
          <p className="p">{JohnDoe} Profile</p>
          <img src={profile} className="photo" alt="" />
        </div>
        <div className="buttons">
          <div className="followers">
            <div className="text">
              <p>Followers</p>
              <Counter counterValue={followers} />
            </div>
            <div className="clickers">
              <ButtonPlus incrementCounter={() => setFollowers(followers + 1)} />
              <ButtonMinus incrementCounter={() => setFollowers(followers - 1)} />
            </div>
          </div>
          <div className="following">
            <div className="text">
              <p>Following</p>
              <Counter counterValue={followig} />
            </div>
            <div className="clickers">
              <ButtonPlus
                className="plus"
                incrementCounter={() => setFollowig(followig+1)}
              />
              <ButtonMinus incrementCounter={() => setFollowig(followig-1)} />
            </div>
          </div>
        </div>
      </div>
      <img src={cat} className="catPhoto" alt="" />
      <footer className="footer">
        <div className="left-footer foot-text">
          <p>365 Freebies. 007/365</p>
        </div>
        <div className="center-footer">
          <img src={logo} alt="" />
        </div>
        <div className="rigth-footer foot-text">
          <p>@anakarenart</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
