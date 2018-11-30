import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
       {
           props.expenses.length === 0 ? (
                <p>No expenses</p>
           ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
    
};
//(mapStateToProps) is thing to get off the store and (ExpenseList) is the component we want to created the connected version off
export default connect(mapStateToProps)(ExpenseList);

//const ConnectedExpenseList = connect((state) => { }
//export default ConnectedExpenseList;