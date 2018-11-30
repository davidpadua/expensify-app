import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type:'REMOVE_EXPENSE',
    id 
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//:::: Expenses Reducer
//::::
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
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

//:::: Filters Reducer
//::::
const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
                return {
                    ...state,
                    text: action.text
                }
        
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
        }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
        }
  
        default: 
            return state;
        }
 };
 
// timestamps (milliseconds)
// January 1st 1970n (unix epoch)


//:::: Get visible expenses
//::::
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());// filtra a palavra a ver se inclui o texto em expense.description //using includes()

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//:::: Store creation
//::::
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
); 

//:::: Store subscribe
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
});

//:::: Store dispatch 'addExpense' action
//::::
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300, createdAt: -1000}));

// //:::: Store dispatch 'editExpense' action
// //::::
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

// //:::: Store dispatch 'setTextFilter' action
// //::::
//store.dispatch(setTextFilter('COFFE'));
// store.dispatch(setTextFilter());


// //:::: Store dispatch 'removeExpense' action
// //::::
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// //console.log(expenseOne)

// //:::: Store dispatch 'sortByAmount' action
// //::::
store.dispatch(sortByAmount()); 

// //:::: Store dispatch 'sortByDate' action
// //::::
// store.dispatch(sortByDate()); // date

//:::: Store dispatch 'setStartDate' action
// store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());

// //:::: Store dispatch 'setEndDate' action
// store.dispatch(setEndDate(999));


const demoState = {
    expenses: [{
        id: 'fewqttrtrwe',
        description: 'January rent',
        note: 'This as the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
/* 
const user = {
    name: 'Jen',
    age: 24
}

console.log({
    ...user,
    location: 'Lisbon',
    age: 27
})
 */
