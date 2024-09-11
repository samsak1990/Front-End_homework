const App = ({ initialText, firstStateBtn }) => {
  const [btnText, setBtnText] = React.useState(initialText);
  const [btnPassiveStyle, setBtnClickedStyle] = React.useState(firstStateBtn);
  const onBtnClick = () => {
    setBtnText("Thanks!");
    setBtnClickedStyle("green-btn");
  };
  return (
    <div className="app">
      <button className={btnPassiveStyle} onClick={onBtnClick}>
        {btnText}
      </button>
    </div>
  );
};

const container = document.querySelector("#app");
const root = ReactDOM.createRoot(container);
root.render(<App initialText="Click Me NOW!" firstStateBtn="" />);
