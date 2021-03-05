import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const renderIconStatus = () => {
    if (props.character.status === "Alive") {
      return <i className=" fas fa-heartbeat"></i>;
    } else if (props.character.status === "Dead") {
      return <i className=" fas fa-skull-crossbones"></i>;
    } else if (props.character.status === "unknown") {
      return <i className=" fas fa-question"></i>;
    }
  };
  if (props.character === undefined) {
    return (
      <div className="not-found">
        <p className="not-found__text">Character not found</p>
        <img
          src="https://media.giphy.com/media/afqT2ykIlYcVi/giphy.gif"
          className="not-found__gif"
        ></img>
      </div>
    );
  } else {
    return (
      <div className="detail">
        <section className="detail__section1">
          <header className="detail__section1--header">
            <Link to="/">
              <button className="detail__section1--header-return">
                Return
              </button>
            </Link>
            <h2 className="detail__section1--header-title">
              {props.character.name}
            </h2>
          </header>
          <main>
            <div className="detail__section2">
              <img
                className="detail__section2--img"
                src={props.character.image}
                alt={`Picture of ${props.character.name}`}
                title={`Picture of ${props.character.name}`}
              ></img>
              <ul className="detail__section2--list">
                <li className="detail__section2--item">
                  <p className="detail__section2--item1">Species:</p>
                  <p className="detail__section2--item2">
                    {props.character.species}
                  </p>
                </li>
                <li className="detail__section2--item">
                  <p className="detail__section2--item1">Planet:</p>
                  <p className="detail__section2--item2">
                    {props.character.origin}
                  </p>
                </li>
                <li className="detail__section2--item">
                  <p className="detail__section2--item1">Episodes:</p>
                  <p className="detail__section2--item2">
                    {props.character.episode.length}
                  </p>
                </li>
                <li className="detail__section2--item">
                  <p className="detail__section2--item1">Status:</p>
                  <p className="detail__section2--item2">
                    {renderIconStatus()}
                  </p>
                </li>
              </ul>
            </div>
          </main>
        </section>
      </div>
    );
  }
};
export default CharacterDetail;
