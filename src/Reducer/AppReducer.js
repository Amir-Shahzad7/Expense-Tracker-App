const TransactionReducer = ((state, action) => {
    switch(action.type){
        case "AddTransactions": {
            return [action.payload, ...state]
        }
        default:
            return state;
    }
})

export default TransactionReducer;
