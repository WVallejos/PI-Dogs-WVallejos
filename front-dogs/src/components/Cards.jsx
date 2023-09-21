import Card from "./Card";
import Pagination from "./Pagination";
import "../styles/Cards.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../redux/action-creators";

function Cards(){

    const sortedDogs = useSelector((state) => state.dogs);
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;


  // Calculate the index range of dogs to display on the current page
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const shownDogs = sortedDogs.slice(indexOfFirstDog, indexOfLastDog);


  useEffect(() => {
    setCurrentPage(1)
    console.log('cambio allDogs');
    console.log(currentPage);
  }, [sortedDogs]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    return(
        <>
    <div className="cardContainer">
      {shownDogs.length > 0 ? shownDogs.map((el) => (
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
    : <h1>No dog found</h1>
    }
    </div>
    <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedDogs.length / dogsPerPage)}
        onPageChange={handlePageChange}
      />

  </>
    )
}

export default Cards