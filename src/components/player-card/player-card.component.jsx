import { Navigate } from "react-router-dom";
import { useState } from "react";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { logOutPlayer } from "../../features/playerSlice";

import "./player-card.styles.scss";

const PlayerCard = ({ player }) => {
  const dispatch = useDispatch();
  const { avatar, name, event } = player;
  const [logOut, setLogOut] = useState(false);

  const handleLogOut = () => {
    fetch("http://localhost:3001/logout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "rebecka",
      }),
    });
    dispatch(logOutPlayer);
    setLogOut(true);
  };
  return (
    <>
      <div className="player-container">
        <img
          className="avatar"
          src={require(`../../${avatar}`)}
          alt={`${name}`}
        />
        <div className="details-container">
          <span className="name">{name}</span>
          <span className="event">{event}</span>
        </div>
      </div>
      <div className="btn-container">
        <Button onClick={handleLogOut}>Log Out</Button>
        {logOut && <Navigate to="/" />}
      </div>
    </>
  );
};

export default PlayerCard;
