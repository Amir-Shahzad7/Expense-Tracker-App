const AppReducer = () => {
    return (
        (state, action) => {
            switch (action.type) {
                case "AddTransaction": {
                    return [action.payload, ...state]
                }
                default:
                    return state;
            }
        }
    )
}

export default AppReducer;
