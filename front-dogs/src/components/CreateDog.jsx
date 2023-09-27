import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDog, getTemperaments } from "../redux/action-creators";
import { validate, validateInputs, validateSubmit } from "../validations";
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
    const [success, setSuccess] = useState({})

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])


    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === 'name') {
            const newValue = value.charAt(0).toUpperCase() + value.slice(1);
            setInput({ ...input, [name]: newValue })
        } else {
            setInput({ ...input, [name]: value })
        }
        console.log('min weight ' + input.minWeight);
        console.log('max :' +input.maxWeight);
        console.log('value ' + value);
        setErrors(validate(event.target, errors))
    }

    const handleTemperamentChange = (event) => {
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
        if (value === '') setErrors({...errors, temperament:''})
        const tempCap = value.charAt(0).toUpperCase() + value.slice(1);
        setNewTemperament(tempCap)
    }

    const handleAddTemperament = () => {
        if (newTemperament) {
            if(temperaments.includes(newTemperament)) return setErrors({...errors, temperament: 'This temperament is already on the list, please select it from there or create a new one'})
            if (!input.temperament.includes(newTemperament)) {
                setErrors({})
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
        const inputerrors = validateInputs(input)
        setErrors(inputerrors)
        if(Object.keys(inputerrors).length > 0) {
            return
        }

        const finalInput = {
            name: input.name,
            height: `${input.minHeight} - ${input.maxHeight}`,
            weight: `${input.minWeight} - ${input.maxHeight}`,
            life_span: `${input.minLife_span} - ${input.maxLife_span}`,
            image: input.image,
            temperament: input.temperament,
        }
        
            dispatch(addDog(finalInput)).then(()=> {
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
                    setSuccess({ok: 'The dog was created succesfully'})
            }).catch((error) => { alert(error.message)})
            
        
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
                            </div>
                            {errors.name && <small className="error" >{errors.name}</small>}
                            <div className="singleInput">
                                <label>Image: </label>
                                <input
                                    type="text"
                                    value={input.image}
                                    name="image"
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.image && <small className="error" >{errors.image}</small>}
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
                            {errors.minWeight && <small className="error" >{errors.minWeight}</small>}
                            <div className="singleInput">
                                <label>Max Weight: </label>
                                <input
                                    type="text"
                                    value={input.maxWeight}
                                    name="maxWeight"
                                    onChange={handleChange}
                                />

                            </div>
                            {errors.maxWeight && <small className="error" >{errors.maxWeight}</small>}
                            {errors.weight && <small className="error" >{errors.weight}</small>}
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
                            {errors.minHeight && <small className="error" >{errors.minHeight}</small>}
                            <div className="singleInput">

                                <label>Max Height: </label>
                                <input
                                    type="text"
                                    value={input.maxHeight}
                                    name="maxHeight"
                                    onChange={handleChange}
                                    />
                            </div>
                            {errors.maxHeight && <small className="error" >{errors.maxHeight}</small>}
                            {errors.height && <small className="error" >{errors.height}</small>}
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
                                {errors.minLife_span && <small className="error" >{errors.minLife_span}</small>}
                                <div className="singleInput">

                                <label>Max Life Span: </label>
                                <input
                                    type="text"
                                    value={input.maxLife_span}
                                    name="maxLife_span"
                                    onChange={handleChange}
                                />
                                </div>
                                {errors.maxLife_span && <small className="error" >{errors.maxLife_span}</small>}
                                {errors.life_span && <small className="error" >{errors.life_span}</small>}
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
                            {errors.temperament && <small className="error" >{errors.temperament}</small>}
                            <button className={validateSubmit(input, errors) ? "disabled" : "button"} type="submit" disabled={validateSubmit(input, errors)}>
                                Create
                            </button>
                            {errors.repeat && <small className="error" >{errors.repeat}</small>}
                        </form>

                </div>
                    <div className="imgContainer">
                        { input.image && <img src={input.image} alt="dogPic" />}
                    </div>
                    {success.ok && <h3 className="success">{success.ok}</h3>}
            </div>
        </div>
    )
}

export default CreateDog