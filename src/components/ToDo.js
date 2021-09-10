import React, { useState, useEffect } from "react"

function ToDo() {

    const [ list, setList ] = useState([])

    const enviarDatos = (e) => {
        e.preventDefault()
        //console.log(e.target.firstChild.value)
        setList([...list, e.target.firstChild.value]) 
        e.target.firstChild.value = "" 
    }

    useEffect(() => {
        console.log(list)
    }, [list])

    return (
        <>
        ¿Cual es la tarea?
        <form onSubmit={enviarDatos}>
            <input type="text" name="tarea"></input>
            <button type="submit">Agregar</button>
        </form>
        <ul>
        { 
        list.map(value => (
            <li>{value}</li>
        ))
        }
        </ul>
    </>
    )
}

export default ToDo;
