import "./App.css";
import Random from "./components/Reandom";

export default function App() {
  return (
    <div className="App">
      <Random maxNum={1000} />
    </div>
  );
}
