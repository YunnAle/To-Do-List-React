mport React, { useState, useEffect } from "react"

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


    const deleteTask=(e) => {
        //Componente de boorrar
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
        list.map(value => (
            <>
                <li>{value}</li>
                {/Quiero que cada elemento tenga un id para asi poder seleccionarlo y borrar especificamente ese/}
                <button type="submit" onClick={()=>{deleteTask(lista.id)}}>ELiminar</button>
            </>
        ))
        }
        </ul>
    </>
    )
}

export default ToDo;