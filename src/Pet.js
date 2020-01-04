import React from "react";

const Pet = ({ xname, xanimal, xbreed, media, location, id }) => {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={xname} />
      </div>
      <div className="info">
        <h1>{xname}</h1>
        <h2>{`${xanimal} — ${xbreed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
