import React from 'react';
import {GlobalContext} from '../Context/GlobalContext';

export const AddTransaction = () => {
    
    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState(0);

    const context = React.useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id:Math.floor(Math.random() * 10000),
            text,
            amount: +amount
        }

        context.addTransaction(newTransaction);

    }

    return(
        <div className="container" style={{textAlign:"center"}}>

            <form onSubmit={handleSubmit}>
                <label htmlFor='text'><h4>Transaction Name</h4></label>
                <input className="u-full-width" type="text" value={text} onChange={(e) => setText(e.target.value)}/>

                <label htmlFor='Amount'><h4>Enter Income or Expense</h4></label>
                <input className="u-full-width" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <br></br>
                <button className="u-full-width button-primary">Add Transaction</button>
            </form>

        </div>
    )
}