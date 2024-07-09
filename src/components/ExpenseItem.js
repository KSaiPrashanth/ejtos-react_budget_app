import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css'; 
import CurrencySelector from './CurrencySelector';
import Remaining from './Remaining';

const ExpenseItem = (props) => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        const updatedCost = props.cost + 10;
// Check if the updated cost exceeds the budget
        if (updatedCost > budget) {
            alert(`The value cannot exceed! Remaining Funds ${CurrencySelector}${Remaining}`);
        } else {
            dispatch({
                type: 'UPDATE_EXPENSE',
                payload: { id: props.id, cost: updatedCost },
            });
        }
    };

    const decreaseAllocation = () => {
        const updatedCost = props.cost - 10;

        if (updatedCost < 0) {
            alert("Allocation can't be less than 0");
        } else {
            dispatch({
                type: 'UPDATE_EXPENSE',
                payload: { id: props.id, cost: updatedCost },
            });
        }
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button className="increase-btn" onClick={increaseAllocation}>+</button></td>
            <td><button className="decrease-btn" onClick={decreaseAllocation}>-</button></td>
            <td><TiDelete size='2.5rem' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;