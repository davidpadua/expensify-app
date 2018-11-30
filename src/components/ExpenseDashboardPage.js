import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

// old syntax
/* class ExpenseDashboardPage extends React.Component {
    render() {
        return (
            <div> This is from my DASHBOARD component</div> 
        );
    }
}; */

// new syntax
const ExpenseDashboardPage = () => (

    <div> 
    <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;