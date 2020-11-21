import React from 'react'

const AccountSummary = () => {
    return (
        <div>
            <div className="IncomeExpenseContainer">
                <div>
                    <h4><b>INCOME</b></h4>
                    <p style={{ fontSize: "20px", color: "#2ECC71" }}>$0.00</p>
                </div>
                <div>
                    <h4><b>EXPENSES</b></h4>
                    <p style={{ fontSize: "20px", color: "#C8392B" }}>$0.00</p>
                </div>
            </div>
        </div>
    )
}

export default AccountSummary
