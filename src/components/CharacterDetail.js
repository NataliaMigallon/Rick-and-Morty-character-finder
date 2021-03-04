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
    return <h1>Personaje no encontrado</h1>;
  } else {
    return (
      <section className="detail__section1">
        <header className="detail__section1--header">
          <Link to="/">
            <span className="detail__section1--return">Return</span>
          </Link>
          <h2 className="detail__section1--title">{props.character.name}</h2>
        </header>
        <main>
          <div className="detail__section2">
            <img
              className="detail__section2--img"
              src={props.character.image}
              alt={props.character.image}
            ></img>
            <ul className="detail__section2--list">
              <li className="detail__section2--item">
                Species: {props.character.species}
              </li>
              <li className="detail__section2--item">
                Planet: {props.character.origin}
              </li>
              <li className="detail__section2--item">
                Episodes: {props.character.episode.length}
              </li>
              <li className="detail__section2--item">
                Status: {renderIconStatus()}
              </li>
            </ul>
          </div>
        </main>
      </section>
    );
  }
};
export default CharacterDetail;
