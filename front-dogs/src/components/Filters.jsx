import { useEffect, useState } from "react";
import { filterTemperaments, getDogsApi, getDogsDB, getTemperaments, reset } from "../redux/action-creators";
import { useDispatch, useSelector } from "react-redux";
import '../styles/Filters.module.css'




function Filters () {

    const temperaments = useSelector((state) => state.temperaments);
    const dispatch = useDispatch();
    const [ selected, setSelected ] = useState(false)
    const [ source, setSource ] = useState(false)
    const [selectedSource, SetSelectedSource] = useState('')
    const [selectedTemp, SetSelectedTemp] = useState('')
    const [filtertype, setFilterType] = useState('')

    useEffect(() => {
        console.log('filter renderizo');
        dispatch(getTemperaments())
    }, [dispatch])

    const handleChange = (evento) => {
        setFilterType(evento.target.value)
        if (evento.target.value === 'temperaments') {
            setSelected(true)
            setSource(false)
            SetSelectedSource('')
        } else if (evento.target.value === 'source') {
            setSelected(false)
            setSource(true)
            SetSelectedTemp('')
        } else {
            setSelected(false)
            setSource(false)
        }
     }

    const handleSource = (evento) => {
        SetSelectedSource(evento.target.value)
        if (evento.target.value === 'api') dispatch(getDogsApi())
        if (evento.target.value === 'database') dispatch(getDogsDB())

    }

    const handleTemperament = (evento) => {
        SetSelectedTemp(evento.target.value);
        dispatch(filterTemperaments(evento.target.value))
    }

    const handleReset = () => {
        setSelected(false)
        setSource(false)
        setFilterType('')
        dispatch(reset())
      }
    


    return(
        <div>
            <label htmlFor="selector">Filter by:</label>
      <select value={filtertype} id="selector" onChange={handleChange}>
        <option value="">Select...</option>
        <option value="temperaments">Temperaments</option>
        <option value="source">Source</option>
      </select>

      {selected&&<div id="temperamentsDropdown" >
        <label htmlFor="temperament">Select temperament:</label>
        <select value={selectedTemp} id="temperament" onChange={handleTemperament}>
            <option value="">Select...</option>
          {temperaments.map((temperament, index) => (
            <option key={index} value={temperament}>
              {temperament}
            </option>
          ))}
        </select>
      </div>}

      {source && <div id="sourceDropdown" className="conditional-dropdown">
        <label htmlFor="source">Select source:</label>
        <select value={selectedSource} id="source" onChange={handleSource}>
        <option value="">Select...</option>
          <option value="api">API</option>
          <option value="database">DATABASE</option>
        </select>
      </div>}
      <span onClick={handleReset}>RESET</span>
        </div>
    )
}

export default Filters