import React, {createContext, useReducer} from 'react'
import Reducer from './Reducer'

let data = []
if (localStorage.getItem('transactions')){
    data = JSON.parse(localStorage.getItem('transactions'))
}

console.log(localStorage.getItem('transactions'))
const initialState = {
    transactions: data
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(Reducer, initialState)

    const addTransaction = (transaction)=>{
        dispatch({
            type : 'ADD',
            payload: transaction
        })
    }

    const deleteTransaction = (id)=>{
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}