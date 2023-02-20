import { createContext, useState } from 'react';

export const calcContext = createContext([])

export default function Context({ children }) {


    const [value, setValue] = useState("")
    const [converter, setConverter] = useState(false)

    const [units, setUnits] = useState("")




    return (
        <calcContext.Provider value={{ value, setValue, converter, setConverter, units, setUnits }}>
            {children}

        </calcContext.Provider>

    )
}