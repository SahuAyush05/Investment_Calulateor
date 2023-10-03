import "./UserInput.css";
const UserInput = () => {
  const SubmitHandler = (event) => {
    event.preventDefault();
  };

  const ResetHandler = () => {};

  const ChangeHandler = (input, value) => {};
  <form className="form" onSubmit={SubmitHandler}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
          onChange={(event) =>
            ChangeHandler("current-savings", event.target.value)
          }
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
          type="number"
          id="expected-return"
        />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input onChange={(event) =>
            ChangeHandler("duration", event.target.value)
          } type="number" id="duration" />
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
