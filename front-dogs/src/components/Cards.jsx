
import { useDispatch, useSelector } from "react-redux";
import "../styles/Cards.css";
import { getDogsDB } from "../redux/action-creators";
import { useEffect, useState } from "react";



export default function Card(props) {



   return <div className="cardContainer">
     <div className="card" key={props.id}>
       <img className="cardImage" src={props.image} alt={props.name} />
       <h3 className="cardTitle">
         {props.name}
       </h3>
       <div className="cardDetails">
         <p>Life Span: {props.life_span}</p>
         <p>Temperament: {props.temperament}</p>
         <p>Weight: {props.weight} kg</p>
         <p>Height: {props.height} cm</p>
       </div>
     </div>
 </div>
}
