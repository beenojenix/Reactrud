import React from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {
    return (
        <form>
        <div className="new-expense-controls">
            <div className="new-expense-control">
                <label>Title</label>
                <input type="text" />
            </div>
            <div className="new-expense-control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense-control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2040-01-01" />
            </div>
        </div>
            <div className="new-expense-actions clearfix">
                <button type="submit" className="clearfix">Add Expense</button>
            </div>      
        </form>
    )
}

export default ExpenseForm;