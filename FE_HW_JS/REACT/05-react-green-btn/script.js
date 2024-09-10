const App = () => {
  const [btnText, setBtnText] = React.useState("Click Me NOW!");
  const onBtnClick = () => {
    setBtnText("Thanks!");
  };
  return (
    <div className="app">
      <button onClick={onBtnClick}>{btnText}</button>
    </div>
  );
};

const container = document.querySelector("#app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
