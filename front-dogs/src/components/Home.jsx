import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../redux/action-creators";
import Cards from "./Cards";






function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  
  useEffect(() => {
    !allDogs.length&&dispatch(getAllDogs());
    console.log('cambio dispatch');
  }, []);

  // useEffect(() => {
  //   setCurrentPage(1)
  //   console.log('cambio allDogs');
  //   console.log(currentPage);
  // }, [allDogs]);

  return (
    <>
    <Cards/>
    </>
  )
}

export default Home;