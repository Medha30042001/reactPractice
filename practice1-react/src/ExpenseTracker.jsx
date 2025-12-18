import { useState } from "react";

function ExpenseTracker(){

    const [expenseName, setName] = useState("");
    const [expenseAmount, setExpense] = useState("");
    const [expenseList, setList] = useState([]);

    function addExpense(){
        const expenseNum = Number(expenseAmount);

        let exp = {expenseName, expenseNum};

        setList(prev => [...prev, exp]);

        setName("");
        setExpense("");
    }

    return(
        <>
        <h2>Expense Tracker</h2>
            <input 
                type="text"  
                placeholder="Add expense name"
                value={expenseName}
                onChange={(e)=>setName(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Enter expense"
                value={expenseAmount}
                onChange={(e)=>setExpense(e.target.value)}
            />
            <button onClick={addExpense}>Add expense</button>
            <p>Expense List:</p>
            <ul>
                {expenseList.map((ex, index)=>(
                    <li key={index}>{ex.expenseName} - {ex.expenseNum}</li>
                ))}
            </ul>
        </>
    );
}

export default ExpenseTracker;

