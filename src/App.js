import "./App.css";
import { useEffect, useState } from "react";
import { getTrainStation } from "./services/TrainServices";
import TrainCard from "./components/TrainCard";
import Filteration from "./components/Filteration";

function App() {
  const [train, setTrain] = useState([]);
  const [sortedTrain, setSortedTrain] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getTrainStation();
      setTrain(response);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      ) : (
        ""
      )}

      <div className="main-container">
        <Filteration train={train} setSortedTrain={setSortedTrain} />
        <TrainCard train={train} sortedTrain={sortedTrain} />
      </div>
    </div>
  );
}

export default App;
