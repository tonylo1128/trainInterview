import { envVariable } from "../config";

export async function getTrainStation() {
  try {
    let resp = await fetch(envVariable.TRAIN_POSITIONS_APICALL, {
      method: "GET",
      Host: "api.wmata.com",
      headers: {
        api_key: envVariable.API_KEY,
      },
    });
  } catch (err) {
    console.log(err);
  }

  resp = await resp.json();
  console.log(resp.TrainPositions);
  return resp.TrainPositions;
}
