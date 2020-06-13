export default (state, action) => {
    switch(action.type) {
        case 'DEL_ITEM':
            return{
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_ITEM':
                return{
                    ...state, 
                    transactions:[action.payload, ...state.transactions]
                }
        default:
            return state;
    }
}