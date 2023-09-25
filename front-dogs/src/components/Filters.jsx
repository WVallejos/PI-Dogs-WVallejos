import { useEffect, useState } from "react";
import { filterSource, filterTemperaments, getAllDogs, getTemperaments, orderName, orderWeight, reset } from "../redux/action-creators";
import { useDispatch, useSelector } from "react-redux";
import '../styles/Filters.css'




function Filters() {

    const temperaments = useSelector((state) => (state.temperaments).sort((a, b) => { return a.toLowerCase() > b.toLowerCase() ? 1 : -1 }));
    const filterByTemp = useSelector((state) => (state.filterByTemp)) // global state to keep record of filter
    const filterBySource = useSelector((state) => (state.filterBySource)) // global state to keep record of source filter
    const orderType = useSelector((state) => state.order)
    const orderBy = useSelector((state) => state.orderBy)
    let showOrder = useSelector((state) => state.showOrder)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTemperaments())
    }, [])

    const handleSource = (evento) => {
        dispatch(filterSource(evento.target.value))

    }

    const handleTemperament = (evento) => {
        dispatch(filterTemperaments(evento.target.value))
    }

    const handleChangeOrder = (evento) => {
        if (evento.target.value === 'name') {
            dispatch(orderName('ASC'))
        }
        if (evento.target.value === 'weight') {
            dispatch(orderWeight('ASC'))
        }
        if (evento.target.value === '') {
            showOrder = false
        }
    }

    const handleOrder = (evento) => {
        if (orderBy === 'name') {
            if (evento.target.value === 'ASC') {
                dispatch(orderName('ASC'))
            } else if (evento.target.value === 'DESC') {
                dispatch(orderName('DESC'))
            }
        }
        else if (orderBy === 'weight') {
            if (evento.target.value === 'ASC') {
                dispatch(orderWeight('ASC'))
            } else if (evento.target.value === 'DESC') {
                dispatch(orderWeight('DESC'))
            }
        }
    }

    const handleReset = () => {
        dispatch(reset())
        dispatch(getAllDogs())
    }



    return (
        <div className='filters'>
            <div className='filterType'>
                <div id="temperamentsDropdown" >
                    <select value={filterByTemp} className="selector" onChange={handleTemperament}>
                        <option value="">Filter by Temperament...</option>
                        {temperaments.map((temperament, index) => (
                            <option key={index} value={temperament}>
                                {temperament}
                            </option>
                        ))}
                    </select>
                </div>

                <div id="sourceDropdown">
                    <select value={filterBySource} className="selector" onChange={handleSource}>
                        <option value="">Filter by Source...</option>
                        <option value="api">API</option>
                        <option value="database">DATABASE</option>
                    </select>
                </div>
            </div>
            <div className='orderType'>
                <select value={orderBy} className="selector" onChange={handleChangeOrder}>
                    <option value="">Order By...</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>

                {showOrder && <div id="orderDropdown">
                    <select value={orderType} className="selector" onChange={handleOrder}>
                        <option value="">Order...</option>
                        <option value="ASC">ASC</option>
                        <option value="DESC">DESC</option>
                    </select>
                </div>}
            </div>
            <div>
                <span className="button" onClick={handleReset}>RESET</span>
            </div>

        </div>
    )
}

export default Filters