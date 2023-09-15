import { useDispatch } from 'react-redux';
import style from '../styles/SearchBar.module.css'
import { useState } from 'react';
import { getDogName } from '../redux/action-creators';


export default function SearchBar({onSearch}) {

   const dispatch = useDispatch()
   const [name, setName] = useState('')

   function handleChange(event) {
      setName(event.target.value)
   }

   const handleKeypress = (event) => {
      //it triggers by pressing the enter key
    if (event.keyCode === 13) {
      dispatch(getDogName(name))
      setName('')
    }
  };

 function cleanInput(name) {
   dispatch(getDogName(name))
   setName('')
 }


   return (
      <div className={style.searchBar}>
         <input className={style.input} type='search' value={name} onChange={handleChange} onKeyDown={handleKeypress}/>
         <button className={style.button} onClick={() => cleanInput(name)}>SEARCH</button>
      </div>
   );// en onclick tiene que haber una funcion, y como onsearch necesita un parametro, si yo pongo onclick=onsearch() seria
   // una invocacion a una funcion, es por eso que deberia ser, una funcion que llama a la funcion onSearch
}
