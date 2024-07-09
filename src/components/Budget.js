import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = () => {
        return expenses.reduce((total, item) => total + item.cost, 0);
    };

    const handleBudgetChange = (event) => {
        let updatedBudget = parseInt(event.target.value);

        // Check if the new budget is a valid number and different from the current budget
        if (isNaN(updatedBudget) || updatedBudget === newBudget || updatedBudget < 0 || updatedBudget > 20000) {
            alert(`Budget must be a valid number, different from the current budget, at least zero, and no more than ${currency}20,000`);
            return;
        }

        // Check if the new budget is greater than or equal to the total expenses
        const totalExpenseValue = totalExpenses();

        if (updatedBudget < totalExpenseValue) {
            alert("You cannot reduce the budget value lower than spending");
            return;
        }

        setNewBudget(updatedBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget,
        });
    };

    


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
           
        </div>
    );
};

export default Budget;