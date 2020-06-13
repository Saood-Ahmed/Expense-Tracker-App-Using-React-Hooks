import React from 'react';
import {GlobalContext} from '../Context/GlobalContext';



export const IncomeExpenses = () => {
    const context = React.useContext(GlobalContext);

    const amount = context.transactions.map(transaction => transaction.amount);

    const income = amount.filter(item => item > 0).reduce((prevItem, item) => (prevItem + item), 0);

    const expense = amount.filter(item => item < 0).reduce((prevItem, item) => (prevItem + item), 0);

    return (
        <div className="container">
            <div>
                <h4 style={{color:"green"}}>Income is:</h4>
                <h4 style={{border:'1px solid green', borderRadius:'2%'}}>{income.toFixed(2)}</h4>
            </div>
            <div>
                <h4 style={{color:"red"}}>Expense is:</h4>
                <h4 style={{border:'1px solid red', borderRadius:'2%'}}>{(expense * -1).toFixed(2)}</h4>
            </div>
        </div>
    )
}