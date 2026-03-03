import { useContext } from "react";
import { AmountContext, CurrencyContext } from "../App";
import { CURRENCIES } from "../Utils/CurrencyUtil";

const PayPal = () => {
  const currency = useContext(CurrencyContext);
  const amount = useContext(AmountContext);
  console.log(currency, amount);

  return (
    <p>
      {currency.currency}, {amount.amount} ={" "}
      {amount.amount * CURRENCIES[currency.currency]} RSD
    </p>
  );
};

export default PayPal;
