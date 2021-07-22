import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Quiz />
    </div>
  );
}

export default App;
