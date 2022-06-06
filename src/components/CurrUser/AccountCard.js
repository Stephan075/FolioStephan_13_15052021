import React from "react";
import { allAccount } from "../../mocks/content";
import AccountItem from "./AccountItem";

/**
 *
 * @returns {HTMLElement}
 */
const AccountCard = () => {
  return (
    <>
      {allAccount.map((account, i) => (
        <section key={i} className="account">
          <AccountItem account={account} />
        </section>
      ))}
    </>
  );
};

export default AccountCard;
