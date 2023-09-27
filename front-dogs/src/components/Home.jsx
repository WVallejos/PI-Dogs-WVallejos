import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../redux/action-creators";
import Cards from "./Cards";
import '../styles/Home.css'






function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if(!allDogs.length) {
      setIsLoading(true)
      dispatch(getAllDogs()).then(()=> {setIsLoading(false)});
    }
  }, []);

  // useEffect(() => {
  //   setCurrentPage(1)
  //   console.log('cambio allDogs');
  //   console.log(currentPage);
  // }, [allDogs]);

  return (
    <>
    {isLoading&&<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
    <Cards/>
    </>
  )
}

export default Home;