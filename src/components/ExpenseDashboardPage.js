import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

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
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;