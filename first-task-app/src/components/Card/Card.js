import React from "react";
import { cardData } from "./Data";
import "./Card.css";

function Card(){
  return(
    <div className="cards">
      {cardData.map((c) => {
        return(
          <div key={c.id} className="card">
            <div className="card-iconn">
              <div className="card-icon" style={{ content: `url(${c.icon})` }}></div>
            </div>
            <div className="card-info">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Card;