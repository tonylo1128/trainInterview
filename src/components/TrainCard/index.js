import { useEffect, useState } from "react";
import "./TrainCard.css";

function TrainCard({ train, sortedTrain }) {
  let collapseHandler = (event) => {
    let collapseTarget = event.target.nextSibling;
    let expendBtn = event.target.children[1];
    if (collapseTarget.classList.contains("active")) {
      collapseTarget.classList.remove("active");
    } else {
      collapseTarget.classList.add("active");
    }

    if (expendBtn.classList.contains("transfrom")) {
      expendBtn.classList.remove("transfrom");
    } else {
      expendBtn.classList.add("transfrom");
    }
  };

  return (
    <div className="train-card-main-container">
      {Object.keys(sortedTrain).length !== 0
        ? Object.entries(sortedTrain).map((item, index) => {
            return (
              <div>
                <div
                  className="title-container"
                  onClick={(event) => {
                    collapseHandler(event);
                  }}
                >
                  <h1 data-hover="Click to collapse">{item[0]}</h1>
                  <div className="collapse-btn"></div>
                </div>

                <div className={"collapse" + " " + "active"}>
                  {item[1].map((item, index) => {
                    return (
                      <div className="train-card-continaer" key={index}>
                        <div>TrainId: {item.TrainId}</div>
                        <div>TrainNumber: {item.TrainNumber}</div>
                        <div>CarCount: {item.CarCount}</div>
                        <div>CircuitId: {item.CircuitId}</div>
                        <div>
                          DestinationStationCode: {item.DestinationStationCode}
                        </div>
                        <div>DirectionNum: {item.DirectionNum}</div>
                        <div>LineCode: {item.LineCode}</div>
                        <div>SecondsAtLocation: {item.SecondsAtLocation}</div>
                        <div>ServiceType: {item.ServiceType}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        : train.map((item, index) => {
            return (
              <div className="train-card-continaer" key={index}>
                <div>TrainId: {item.TrainId}</div>
                <div>TrainNumber: {item.TrainNumber}</div>
                <div>CarCount: {item.CarCount}</div>
                <div>CircuitId: {item.CircuitId}</div>
                <div>DestinationStationCode: {item.DestinationStationCode}</div>
                <div>DirectionNum: {item.DirectionNum}</div>
                <div>LineCode: {item.LineCode}</div>
                <div>SecondsAtLocation: {item.SecondsAtLocation}</div>
                <div>ServiceType: {item.ServiceType}</div>
              </div>
            );
          })}
    </div>
  );
}

export default TrainCard;
