import { useState } from "react";
import "./UserInput.css";
const InitialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, SetUserInput] = useState(InitialUserInput);
  const SubmitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
  };

  const ResetHandler = () => {
    SetUserInput(InitialUserInput);
  };

  const ChangeHandler = (input, value) => {
    SetUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  <form className="form" onSubmit={SubmitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
          onChange={(event) =>
            ChangeHandler("current-savings", event.target.value)
          }
          value={userInput["current-savings"]}
          type="number"
          id="current-savings"
        />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          onChange={(event) =>
            ChangeHandler("yearly-contribution", event.target.value)
          }
          value={userInput["yearly-contribution"]}
          type="number"
          id="yearly-contribution"
        />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">Expected Interest (%, per year)</label>
        <input
          onChange={(event) =>
            ChangeHandler("expected-return", event.target.value)
          }
          value={userInput["expected-return"]}
          type="number"
          id="expected-return "
        />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          onChange={(event) => ChangeHandler("duration", event.target.value)}
          value={userInput["duration"]}
          type="number"
          id="duration"
        />
      </p>
    </div>
    <p className="actions">
      <button type="reset" onClick={ResetHandler} className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>;
};

export default UserInput;
