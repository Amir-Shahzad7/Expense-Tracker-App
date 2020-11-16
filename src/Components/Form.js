import React from 'react';

const Form = () => {
    return (
        <div className="Form">
            <form>
                <label>Text</label>
                <br />
                <input type="text" className="InputBoxes" placeholder="Enter text..."></input>
                <br />
                <br />
                <label>Amount<br />(negative - expense, positive - income)</label>
                <br />
                <input type="text" className="InputBoxes" placeholder="Enter amount..."></input>
                <br />
                <input type="submit" value="Add transaction" className="AddButton"></input>
            </form>
        </div>
    )
}

export default Form;
