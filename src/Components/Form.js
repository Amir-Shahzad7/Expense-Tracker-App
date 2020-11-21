import React, { useState } from 'react';

const Form = () => {

    const [text, setText] = useState();
    const [amount, setAmount] = useState();

    return (
        <div className="Form">
            <form>
                <label>Text</label>
                <br />
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="InputBoxes" placeholder="Enter text..."></input>
                <br />
                <br />
                <label>Amount<br />(negative - expense, positive - income)</label>
                <br />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="InputBoxes" placeholder="Enter amount..."></input>
                <br />
                <input type="submit" value="Add transaction" className="AddButton"></input>
            </form>
        </div>
    )
}

export default Form;
