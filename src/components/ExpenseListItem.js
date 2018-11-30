import React from 'react';
import { Link } from 'react-router-dom';



// Stateless functional component

const ExpenseListItem = ( { id, description, amount, createdAt}) => (

    <div>
    <Link to={`/edit/${id}`}>
         <h3>{description}</h3>
    </Link>
        <p>{amount} - {createdAt}</p>
        
    </div>
);

export default ExpenseListItem;// dont need any info from state so the first () is empty