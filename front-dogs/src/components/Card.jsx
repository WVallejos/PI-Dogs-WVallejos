

import { Link } from "react-router-dom";
import "../styles/Cards.css";



export default function Card(props) {

  
  return <div className="card-wrapper" key={props.id}>
            <div className="card-top">
              <img className="image" src={props.image} alt={props.name} />
            </div>
            <div className="card-bottom">
            
            <span className="top-text">
              {props.name}
            </span>
            <div className="bottom-text">
              <p>Life Span: {props.life_span}</p>
              <p>Temperament: {props.temperament}</p>
              <p>Weight: {props.weight} kg</p>
              <p>Height: {props.height} cm</p>
              <Link to={`/detail/${props.id}`} >
              <span className="seeMore">See More</span>
              </Link>
            </div>
            </div>
          </div>
}
