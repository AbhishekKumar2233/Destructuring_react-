import "./styles.css";
import cars from "./data";

export default function App() {
  return (
    <div className="app">
      <table border="2">
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colours</th>
        </tr>
        <tr>
          <td>{cars[0].model}</td>
          <td>{cars[0].speedStats.topSpeed}</td>
          <td>{cars[0].coloursByPropularity}</td>
        </tr>
      </table>
    </div>
  );
}
