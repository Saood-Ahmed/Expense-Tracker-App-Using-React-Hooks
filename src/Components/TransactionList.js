import React from 'react';
import {GlobalContext} from '../Context/GlobalContext';

export const TransactionList = () => {
    const context = React.useContext(GlobalContext);


    return(
        <div style={{textAlign:"center"}}>
            <h2>Transaction List:</h2>
            <table class="u-full-width">
                <thead>
                    <tr>
                        <th>Transaction Name</th>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {context.transactions.map((transaction) => {
                            return( 
                            <tr>
                            <td key={transaction.id}>
                           {transaction.text}</td>
                            <td>{transaction.amount > 0 ? 'INCOME' : 'EXPENSE'}</td>
                            <td>{transaction.amount > 0 ? "+": "-"}$<span>{Math.abs(transaction.amount)}</span></td>
                           <td>
                            <button style={{backgroundColor:"red", color:"white"}} onClick={() => context.delTransaction(transaction.id)}>Remove</button>
                            </td>
                            </tr>
                    )
                })}
                
                </tbody>
            </table>            
        </div>
    )
}