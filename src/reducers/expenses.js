

//:::: Expenses Reducer
//::::
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
   switch (action.type) {

        case 'ADD_EXPENSE':
            return [...state, action.expense ]; //includes the current array (state)
        
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, //object spread (...expense)
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });

        default: 
            return state;
   }
};

