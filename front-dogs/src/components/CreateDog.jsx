import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDog, getTemperaments } from "../redux/action-creators";
import { NavLink } from "react-router-dom";
import '../styles/CreateDog.css'



function CreateDog() {

    const temperaments = useSelector((state) => (state.temperaments).sort((a, b) => { return a.toLowerCase() > b.toLowerCase() ? 1 : -1 }))
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        minLife_span: "",
        maxLife_span: "",
        image: "",
        temperament: [],
    })
    const [errors, setErrors] = useState({})
    const [newTemperament, setNewTemperament] = useState('')

    useEffect(() => {
        console.log('cambio el dispatch');
        dispatch(getTemperaments())
        console.log(temperaments);
    }, [dispatch])



    const handleChange = (event) => {
        console.log('hola');
        console.log(temperaments);
        const { name, value } = event.target
        if (name === 'name') {
            const newValue = value.charAt(0).toUpperCase() + value.slice(1);
            setInput({ ...input, [name]: newValue })
        } else {
            setInput({ ...input, [name]: value })
        }
    }
    const handleTemperamentChange = (event) => {
        console.log('hola2');
        const selectedOptions = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setInput({
            ...input,
            temperament: selectedOptions,
        });
    }
    const handleDelete = (temp) => {
        setInput({
            ...input,
            temperament: input.temperament.filter((t) => t !== temp),
        });
    }

    const handleNewTemperament = (evento) => {
        const { value } = evento.target
        const tempCap = value.charAt(0).toUpperCase() + value.slice(1);
        setNewTemperament(tempCap)
    }

    const handleAddTemperament = () => {
        if (newTemperament) {
            if (!input.temperament.includes(newTemperament)) {
                setInput({
                    ...input,
                    temperament: [...input.temperament, newTemperament],
                });
                setNewTemperament("");
            }
        }
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        const finalInput = {
            name: input.name,
            height: `${input.minHeight} - ${input.maxHeight}`,
            weight: `${input.minWeight} - ${input.maxHeight}`,
            life_span: `${input.minLife_span} - ${input.maxLife_span}`,
            image: input.image,
            temperament: input.temperament,
        }

        dispatch(addDog(finalInput))
        console.log('hola Submit');
        console.log(finalInput);
        setInput({
            name: "",
            minHeight: "",
            maxHeight: "",
            minWeight: "",
            maxWeight: "",
            minLife_span: "",
            maxLife_span: "",
            image: "",
            temperament: [],
        })
        setNewTemperament('')
    }


    return (
        <div className="bodyContainer" >
            <div className="wrapper">
                <div className="formContainer">
                    <h1>Create your own Dog</h1>
                        <h3>Please provide the following information:</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="singleInput"> 
                                <label>Name: </label>
                                <input
                                    type="text"
                                    value={input.name}
                                    name="name"
                                    placeholder="Name..."
                                    onChange={handleChange}
                                />
                                {/* aca va el error */}
                            </div>
                            <div className="singleInput">
                                <label>Image: </label>
                                <input
                                    type="text"
                                    value={input.image}
                                    name="image"
                                    onChange={handleChange}
                                />
                                {/* aca va el error */}
                            </div>
                            <div className="doubleInput">
                            <div className="singleInput">
                                <label>Min Weight: </label>
                                <input
                                    type="text"
                                    value={input.minWeight}
                                    name="minWeight"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="singleInput">
                                <label>Max Weight: </label>
                                <input
                                    type="text"
                                    value={input.maxWeight}
                                    name="maxWeight"
                                    onChange={handleChange}
                                />

                            </div>
                            </div>
                            <div className="doubleInput">
                            <div className="singleInput">
                                <label>Min Height: </label>
                                <input
                                    type="text"
                                    value={input.minHeight}
                                    name="minHeight"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="singleInput">

                                <label>Max Height: </label>
                                <input
                                    type="text"
                                    value={input.maxHeight}
                                    name="maxHeight"
                                    onChange={handleChange}
                                />
                            </div>
                            </div>
                            <div className="doubleInput">
                            <div className="singleInput">
                                <label>Min Life Span: </label>
                                <input
                                    type="text"
                                    value={input.minLife_span}
                                    name="minLife_span"
                                    onChange={handleChange}
                                />
                                </div>
                                <div className="singleInput">

                                <label>Max Life Span: </label>
                                <input
                                    type="text"
                                    value={input.maxLife_span}
                                    name="maxLife_span"
                                    onChange={handleChange}
                                />
                                </div>
                            </div>
                            <div className="temperamentInput">
                            <label>Temperaments: </label>
                            <select
                                multiple
                                value={input.temperament}
                                onChange={handleTemperamentChange}
                            >
                                {temperaments.map((temperament, index) => (
                                    <option key={index} value={temperament}>
                                        {temperament}
                                    </option>
                                ))}
                            </select>
                            </div>
                            <div className="newTemperaments">
                                {input.temperament.map((t) => (
                                    <div key={t} className="divTemp">
                                        <p>{t}</p>
                                        <button className="botonX" onClick={() => handleDelete(t)}>
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={newTemperament}
                                    onChange={handleNewTemperament}
                                />
                                <button type="button" onClick={handleAddTemperament}>
                                    Add new temperament
                                </button>
                            </div>
                            <button className="button" type="submit">
                                Create
                            </button>
                        </form>

                </div>
                    <div className="imgContainer">
                        { input.image && <img src={input.image} alt="dogPic" />}
                    </div>
            </div>
        </div>
    )
}

export default CreateDog