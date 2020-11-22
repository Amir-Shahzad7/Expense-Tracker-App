import React, { useState } from 'react';

const AddTransaction = () => {
    let [text, setText] = useState("");
    let [amount, setAmount] = useState("");

    let handleAddition = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <div className="AddTransaction">
                <h3>Add new transaction</h3>
                <hr className="HorizontalLine"></hr>
            </div>
            <div className="Form">
                <form onSubmit={handleAddition}>
                    <label>Text</label>
                    <br />
                    <input type="text" value={text} required onChange={(e) => setText(e.target.value)} className="InputBoxes" placeholder="Enter text..."></input>
                    <br />
                    <br />
                    <label>Amount<br />(negative - expense, positive - income)</label>
                    <br />
                    <input type="number" value={amount} required onChange={(e) => setAmount(e.target.value)} className="InputBoxes" placeholder="Enter amount..."></input>
                    <br />
                    <input type="submit" value="Add transaction" className="AddButton"></input>
                </form>
            </div>
        </div>

    )
}

export default AddTransaction;
