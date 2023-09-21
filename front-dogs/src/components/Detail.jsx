import { getAdapter } from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDogById } from "../redux/action-creators"
import { useParams } from "react-router-dom"
import '../styles/Detail.css'



function Detail() {
    const {id} = useParams()
    const dog = useSelector((state) => state.dogDetail)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getDogById(id))
    }, [dispatch])

    return (
        <div className="container"> 
        <div className="detailContainer">
            <div className="detailInfo" >
                <h1> {dog.id} - {dog.name} </h1>
                <h2>Details: </h2>
                <p>Height: {dog.height} cms</p>
                <p>Weight: {dog.weight} Kg </p>
                <p>Temperaments: {dog.temperament} </p>
                <p>Life Span: {dog.life_span} </p>
        
            </div>
            <div className="detailImage" >
                <img src={dog.image} alt="dogPic" />
            </div>
        </div>
        </div>
    )
} 

export default Detail