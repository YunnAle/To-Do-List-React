import React, { useState, useEffect } from "react"

function ToDo() {

    const [ list, setList ] = useState([])

    const enviarDatos = (e) => {
        e.preventDefault()
        //console.log(e.target.firstChild.value)
        setList([...list, e.target.firstChild.value]) 
        e.target.firstChild.value = "" 
    }

    const deleteTask = (index) => {
        // console.log(list.splice(index, 0))
        const filtered = list.filter((value) => value != list[index])
        setList(filtered)
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
        list.map((value, index) => (
            <>
                <li key={index}>
                    {value}
                    <button type="submit" onClick={()=>{deleteTask(index)}}>ELiminar</button>
                </li>
            </>
        ))
        }
        </ul>
    </>
    )
}

export default ToDo;