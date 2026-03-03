import { createContext, useState } from "react";
import Payment from "./components/payment";
import { CURRENCIES } from "./Utils/CurrencyUtil";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);

  const updateCurrency = (currency) => {
    setCurrency(currency);
  };

  const updateAmount = (value) => {
    setAmount(value);
  };

  return (
    <>
      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <AmountContext.Provider value={{ amount, updateAmount }}>
          <Payment />
        </AmountContext.Provider>
      </CurrencyContext.Provider>

      <input onInput={(e) => updateAmount(e.target.value)} />
      <select onChange={(e) => updateCurrency(e.target.value)}>
        {Object.keys(CURRENCIES).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
