import { useEffect } from "react";
import { useReducer } from "react";
import { createContext, useContext, useState } from "react";

const RecipeStates = createContext()



const initialState = JSON.parse(localStorage.getItem('favs')) || []

const reducer = (state, action) => {
    switch(action.type){
        case 'LIKE':
            return [...state, action.payload]
        case 'DISLIKE':
            return action.payload //para completar
        default: 
            throw new Error()
    }
}

const Context = ({children}) => {
    const [search, setSearch] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        console.log(state)
        localStorage.setItem('favs', JSON.stringify(state))
    }, [state])

    // const [favs, setFavs] = useState([])
    return(
        <RecipeStates.Provider value={{
            search, setSearch,
            state, dispatch, 
            // favs, setFavs
        }}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)