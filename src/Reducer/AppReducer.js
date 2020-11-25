const TransactionReducer = ((state, action) => {
    switch(action.type){
        case "AddTransactions": {
            return [action.payload, ...state]
        }
        case "DeleteTransactions":
            return state.filter(transactions => transactions.id !== action.payload)

        default:
            return state;
    }
})

export default TransactionReducer;
