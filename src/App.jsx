import "./App.css";
import LineCharts from "./components/LineChart/LineCharts";
import NavBar from "./components/NavBar/NavBar";
import Prices from "./components/prices/Prices";
// import Duisy from './components/NavBar/Duisy';

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <Duisy></Duisy> */}
      <h1>Class optional project</h1>
      <Prices></Prices>
      <LineCharts></LineCharts>
    </>
  );
}

export default App;
