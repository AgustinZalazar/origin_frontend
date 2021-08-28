import React,{ useState} from 'react'
import useActions from '../../hooks/useActions';
import  './input.css'

export default function InputAutocomplete({handleClick}) {
    const [text, setText] = useState('')
    const [suggestion, setSuggestion] = useState([])
    
    const {acciones} = useActions()
    const handleOnchange = (text) => {
       setSuggestion(acciones.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
       setText(text)
    }

    return (
        <div className="mx-5 input-container">
            <input 
                className="form-control"
                onChange = {e => handleOnchange(e.target.value)} 
                value= { text }
            />
            <div className="options-container" >
            { suggestion.map((item, i) =>(
                <button className="btn btn-link text-black w-100" key={i} onClick={() => handleClick(item)} > { item.name }</button>   
            ))}
            </div>
        </div>
    )
}
