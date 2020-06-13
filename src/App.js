import React from 'react';
import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {IncomeExpenses} from './Components/IncomeExpenses';
import {TransactionList} from './Components/TransactionList';
import {AddTransaction} from './Components/AddTransaction';

import {GlobalProvider} from './Context/GlobalContext';

function App() {
  return (<div style={{backgroundImage: 'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)'}}>
    <GlobalProvider>
     <Header />
     <div className="container">
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransaction />
     </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
