import Card from "./Card";
import Pagination from "./Pagination";
import "../styles/Cards.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cards(){

    const sortedDogs = useSelector((state) => state.dogs);
    const currentPage = useSelector((state) => state.currentPage)
    const dispatch = useDispatch()
    // const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;


  // Calculate the index range of dogs to display on the current page
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const shownDogs = sortedDogs.slice(indexOfFirstDog, indexOfLastDog);


  useEffect(() => {
    console.log('cambio allDogs');
    console.log(currentPage);
  }, [sortedDogs, currentPage]);

    return(
        <>
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
      ))
    }
    </div>
    <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedDogs.length / dogsPerPage)}
      />

  </>
    )
}

export default Cards