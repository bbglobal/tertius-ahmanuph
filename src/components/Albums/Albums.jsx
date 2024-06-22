import { useState } from "react";
import "./style.css";

const Albums = ({showAlbums, hideAlbums}) => {

  return (
    <>
      <div className={`albums-container ${showAlbums ? "left-0" : "left-full"}`}>
        <h3>Albums</h3>
        <div className="divider"></div>
        <ul>
          <li>
            <a href="#">Get This Way</a>
          </li>
          <li>
            <a href="#">3am On Jan 31st</a>
          </li>
          <li>
            <a href="#">Lonely Homes</a>
          </li>
        </ul>

        <h5 onClick={hideAlbums}>Close</h5>
      </div>
    </>
  );
};

export default Albums;
