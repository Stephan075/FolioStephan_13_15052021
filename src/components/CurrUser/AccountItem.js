import React from "react";

/**
 *
 * @param {Object} - list account
 * @returns {HTMLElement}
 */
const AccountItem = ({ account }) => {
  return (
    <>
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">${account.amount}</p>
        <p className="account-amount-description">{account.Description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </>
  );
};

export default AccountItem;
