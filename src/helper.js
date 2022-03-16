// export default function filteration(filterationType, train, setSortedTrain) {
//   let temp = {};

//   switch (filterationType) {
//     case "LineCode":
//       train.map((item, index) => {
//         if (!temp[item.LineCode]) {
//           temp[item.LineCode] = [];
//         }
//         temp[item.LineCode].push(item);
//       });
//       console.log(temp);
//       setSortedTrain(temp);
//       break;

//     case "ServiceType":
//       train.map((item, index) => {
//         if (!temp[item.ServiceType]) {
//           temp[item.ServiceType] = [];
//         }
//         temp[item.ServiceType].push(item);
//       });
//       console.log(temp);
//       setSortedTrain(temp);
//       break;

//     case "CarCount":
//       train.map((item, index) => {
//         if (!temp[item.CarCount]) {
//           temp[item.CarCount] = [];
//         }
//         temp[item.CarCount].push(item);
//       });
//       console.log(temp);
//       setSortedTrain(temp);
//       break;

//     case "all":
//     default:
//       temp["all"] = [...train];
//       setSortedTrain(temp);
//   }
// }

export default function filteration(filterationType, train, setSortedTrain) {
  let temp = {};

  switch (filterationType) {
    case "LineCode":
    case "ServiceType":
    case "CarCount":
      train.map((item) => {
        const bufferType = item[filterationType];
        if (!temp[bufferType]) {
          temp[bufferType] = [];
        }
        temp[bufferType].push(item);
      });
      setSortedTrain(temp);
      break;

    case "all":
    default:
      temp["all"] = [...train];
      setSortedTrain(temp);
  }
}
