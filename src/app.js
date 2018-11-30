import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'; //default export sem {}
import { addExpense } from './actions/expenses'; //named export com {}
//import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

//:::: Store dispatch 'addExpense' action
//store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));// add an expense with water bill description
//store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}));// add an expense with Gas bill description
//store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
// //:::: Store dispatch 'setTextFilter' action
// store.dispatch(setTextFilter('gas'));// sets filter with 'bill' word

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
//ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));

