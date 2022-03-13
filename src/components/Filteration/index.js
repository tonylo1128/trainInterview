import "./Filteration.css";
import filteration from "../../helper";

function Filteration({ train, setSortedTrain }) {
  return (
    <div className="filteration-container">
      <div className="">Filteration:</div>
      <div className="filteration-btn-container">
        <button
          className=""
          onClick={() => {
            filteration("LineCode", train, setSortedTrain);
          }}
        >
          LineCode
        </button>
        <button
          className=""
          onClick={() => {
            filteration("ServiceType", train, setSortedTrain);
          }}
        >
          {" "}
          ServiceType{" "}
        </button>

        <button
          className=""
          onClick={() => {
            filteration("CarCount", train, setSortedTrain);
          }}
        >
          {" "}
          CarCount{" "}
        </button>
      </div>
    </div>
  );
}

export default Filteration;
