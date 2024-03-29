import React from "react";

function PlayerDetails(props) {
  return (
    <div className="c-player--details">
      <div className="details-img">
        <img src={props.songs.img_src} alt="" />
      </div>
      <h3 className="details-title">{props.songs.title}</h3>
      <h4 className="details-artist">{props.songs.artist}</h4>
    </div>
  );
}

export default PlayerDetails;
