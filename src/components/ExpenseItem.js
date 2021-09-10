import { useState } from "react"

const ExpenseItem = ({ name, price, cantidad}) => {
    
    const [available, setAvailable] = useState(cantidad > 0)
    
    return (
        <>
        <div>
            { available ? "Disponible" : "Agotado" }
        </div>
        <div>
            { ` Producto ${name}` }
        </div>
        <div>
        { ` Precio ${price}` }
        </div>
        <div>
            {cantidad}
        </div>
        <button onClick={() => setAvailable(!available)}>Cambiar estado</button>
        </>
    )
}

export default ExpenseItem
