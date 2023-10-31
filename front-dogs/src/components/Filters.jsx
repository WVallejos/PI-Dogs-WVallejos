import { useEffect, useState } from "react";
import { filterAndSort, getAllDogs, getTemperaments, reset } from "../redux/action-creators";
import { useDispatch, useSelector } from "react-redux";
import '../styles/Filters.css'




function Filters() {

    const temperaments = useSelector((state) => (state.temperaments).sort((a, b) => { return a.toLowerCase() > b.toLowerCase() ? 1 : -1 }));
    const filterByTemp = useSelector((state) => (state.filterByTemp)) // global state to keep record of what temp I use to filter (active, adaptable, etc)
    const filterBySource = useSelector((state) => (state.filterBySource)) // global state to keep record of what source I use to filter (api, database)
    const orderType = useSelector((state) => state.order) // global state (ASC,DESC)
    const orderBy = useSelector((state) => state.orderBy) // global state (name, weight)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTemperaments())
    }, [])

    const handleChange = (event) => {
        const {value, name} = event.target;
        console.log(value);
        console.log(name);
        dispatch(filterAndSort({value, name }))
    }

    // const handleSource = (evento) => {
    //     dispatch(filterSource(evento.target.value))

    // }

    // const handleTemperament = (evento) => {
    //     dispatch(filterTemperaments(evento.target.value))
    // }

    // const handleChangeOrder = (evento) => {
    //     console.log(evento.target.value);
    //     if (evento.target.value === 'name') {
    //         dispatch(orderName('ASC'))
    //     }
    //     if (evento.target.value === 'weight') {
    //         dispatch(orderWeight('ASC'))
    //     }
    //     if (evento.target.value === '') {
    //         showOrder = false
    //     }
    // }

    // const handleOrder = (evento) => {
    //     if (orderBy === 'name') {
    //         if (evento.target.value === 'ASC') {
    //             dispatch(orderName('ASC'))
    //         } else if (evento.target.value === 'DESC') {
    //             dispatch(orderName('DESC'))
    //         }
    //     }
    //     else if (orderBy === 'weight') {
    //         if (evento.target.value === 'ASC') {
    //             dispatch(orderWeight('ASC'))
    //         } else if (evento.target.value === 'DESC') {
    //             dispatch(orderWeight('DESC'))
    //         }
    //     }
    // }

    const handleReset = () => {
        dispatch(reset())
        dispatch(getAllDogs())
    }



    return (
        <div className='filters'>
            <div className='filterType'>
                <div id="temperamentsDropdown" >
                    <select name="filterByTemp" value={filterByTemp} className="selector" onChange={handleChange}>
                        <option  value="">Filter by Temperament...</option>
                        {temperaments.map((temperament, index) => (
                            <option key={index} value={temperament}>
                                {temperament}
                            </option>
                        ))}
                    </select>
                </div>

                <div id="sourceDropdown">
                    <select name="filterBySource" value={filterBySource} className="selector" onChange={handleChange}>
                        <option value="">Filter by Source...</option>
                        <option value="api">API</option>
                        <option value="database">DATABASE</option>
                    </select>
                </div>
            </div>
            <div className='orderType'>
                <select name="orderBy" value={orderBy} className="selector" onChange={handleChange}>
                    <option value="">Order By...</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>

                <div id="orderDropdown">
                    <select name="order" value={orderType} className="selector" onChange={handleChange}>
                        <option value="">Order...</option>
                        <option value="ASC">ASC</option>
                        <option value="DESC">DESC</option>
                    </select>
                </div>
            </div>
            <div>
                <span className="button" onClick={handleReset}>RESET</span>
            </div>

        </div>
    )
}

export default Filters