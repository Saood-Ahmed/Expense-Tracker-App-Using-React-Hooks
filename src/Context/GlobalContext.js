import React from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
        {id:1, text:"Salary", amount:400},
        {id:2, text:"Books", amount:-300}
    ]
}

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    function delTransaction (id){
        dispatch({
            type:'DEL_ITEM',
            payload:id
        })
    };
    function addTransaction (item){
        dispatch({
            type:'ADD_ITEM',
            payload:item
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            delTransaction: delTransaction,
            addTransaction: addTransaction
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}