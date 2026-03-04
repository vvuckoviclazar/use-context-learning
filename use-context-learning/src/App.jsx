import { createContext, useState } from "react";
import Payment from "./components/payment";
import { CURRENCIES } from "./Utils/CurrencyUtil";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [username, setUsername] = useState(null);
  const [money, setMoney] = useState(null);
  const [isUserCreated, setIsUserCreated] = useState(false);

  const updateCurrency = (currency) => {
    setCurrency(currency);
  };

  const updateAmount = (value) => {
    setAmount(value);
  };

  const saveUser = () => {
    if (
      username === null ||
      username.trim() === "" ||
      money === null ||
      isNaN(money)
    ) {
      return;
    }
    setIsUserCreated(true);
  };

  return (
    <>
      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <AmountContext.Provider value={{ amount, updateAmount }}>
          <Payment />
        </AmountContext.Provider>
      </CurrencyContext.Provider>

      <input onInput={(e) => updateAmount(e.target.value)} />

      {!isUserCreated && (
        <form>
          <input
            placeholder="Enter your username"
            onInput={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Enter your money"
            onInput={(e) => setMoney(parseInt(e.target.value))}
          />
          <button type="button" onClick={saveUser}>
            Create user
          </button>
        </form>
      )}

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
