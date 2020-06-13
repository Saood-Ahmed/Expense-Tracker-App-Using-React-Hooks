import React from 'react';
import {GlobalContext} from '../Context/GlobalContext';



export const Balance = () => {

    const context = React.useContext(GlobalContext)
    const amounts = context.transactions.map((transaction => parseInt(transaction.amount)));
    if(amounts.length > 1) {
        var total = amounts.reduce((prevItem, item) => (prevItem + item)).toFixed(2);
    }
    else {
        var total = 0;
    }
    return(
        <div style={{backgroundColor:"#fddb27ff",color:'black', textAlign:'center', border:"2px solid black", borderRadius:"1%"}}>
            <h3>Your Balance is:</h3>
        <h2>{total > 0 ? "+" : "-"}$<span style={
                {   borderRadius:'5%'}}>
                    {Math.abs(total)}
                    </span>
                    </h2>
        </div>
    )
}