import { useDispatch } from 'react-redux';
import style from '../styles/SearchBar.module.css'
import { useState } from 'react';
import { getDogName } from '../redux/action-creators';


export default function SearchBar() {

   const dispatch = useDispatch()
   const [name, setName] = useState('')

   function handleChange(event) {
      setName(event.target.value)
   }

   const handleKeypress = (event) => {
      //it triggers by pressing the enter key
      if (event.keyCode === 13) {
         if (name.trim() === '') alert('Name should be a non empty string')
         dispatch(getDogName(name.trim()))
         setName('')
      }
   };

   function onSearch(name) {
      if (name.trim() === '') alert('Name should be a non empty string')
      dispatch(getDogName(name.trim()))
      setName('')
   }


   return (
      <div className={style.searchBar}>
         <input className={style.input} type='search' value={name} placeholder='Search by Name...' onChange={handleChange} onKeyDown={handleKeypress}></input>
         <span className={style.button} onClick={() => onSearch(name)}>SEARCH</span>
      </div>
   );// en onclick tiene que haber una funcion, y como onsearch necesita un parametro, si yo pongo onclick=onsearch() seria
   // una invocacion a una funcion, es por eso que deberia ser, una funcion que llama a la funcion onSearch
}
