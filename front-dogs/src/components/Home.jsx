import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../redux/action-creators";
import Card from "./Cards";
import Nav from "./Nav";
import "../styles/Cards.css";





function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs)
    const [shownDogs, setShownDogs] = useState(allDogs)
    

  useEffect(() => {
    dispatch(getAllDogs());
    console.log('cambio dispatch');
  }, [dispatch]);

  useEffect(() => {
    console.log('cambio allDogs');
    setShownDogs(allDogs);
  }, [allDogs]);

    return ( <>
    
    <h1> HOLA !</h1>
    <Nav 
      onSearch={(name) => onSearch(name)} />
    <div className="cardContainer">
        {shownDogs.map((el) => (
    <Card 
     id={el.id}
     key={el.id}
     image={el.image}
     name={el.name}
     life_span={el.life_span}
     temperament={el.temperament}
     weight={el.weight} 
     height={el.height}
    />
   ))}
 </div>
    
    </>
    )
}

export default Home;