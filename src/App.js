import "./styles.css";
import cars from "./data";

const [bmw, tesla] = cars;

const {
  speedStats: { topSpeed: bmwTopspeed }
} = bmw;
const {
  speedStats: { topSpeed: teslaTopspeed }
} = tesla;

const {
  coloursByPropularity: [bmwTopcolor]
} = bmw;
const {
  coloursByPropularity: [teslaTopcolor]
} = tesla;

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
          <td>{bmw.model}</td>
          <td>{bmwTopspeed}</td>
          <td>{bmwTopcolor}</td>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopspeed}</td>
          <td>{teslaTopcolor}</td>
        </tr>
      </table>
    </div>
  );
}
