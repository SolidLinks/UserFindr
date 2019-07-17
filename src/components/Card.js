import React from "react";

const Card = ({ name, email, id, username }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?set=set5&size=200x200`}
        alt="Robots"
      />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
