import React, { useState, useEffect } from "react"

function ToDo() {

    const [ list, setList ] = useState([])

    const enviarDatos = (e) => {
        e.preventDefault()
        //console.log(e.target.firstChild.value)
        setList([...list, e.target.firstChild.value]) 
        e.target.firstChild.value = "" 
    }
    //no entiendo que rayos hace useEffect-
    useEffect(() => {
        console.log(list)
    }, [list])


    const deleteTask=(index) => {
        
    }
    return (
        <>
        ¿Cual es la tarea?
        <form onSubmit={enviarDatos}>
            <input type="text" name="tarea"></input>
            <button type="submit">Agregar</button>
        </form>
        <ul>
        { 
        list.map((value, index) => (
            <>
                <li>
                    {value}
                    <button type="submit" onClick={()=>this.delete(list.index)}>ELiminar</button>
                </li>
            </>
        ))
        }
        </ul>
    </>
    )
}

export default ToDo;