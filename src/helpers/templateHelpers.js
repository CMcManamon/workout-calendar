import * as Constants from "../constants";

// Takes a workout template and adds data fields for use with local storage
export const expandTemplate = (template) => {
  let workout = JSON.parse(JSON.stringify(template)); // deep copy nested object
  workout.days.forEach((day) => {
    switch (day.type) {
      case Constants.WORKOUT:
        day.nailedIt = false;
        day.barelyMadeIt = false;
        break;
      case Constants.STATS:
        day.weight = "";
        day.chest = "";
        day.waist = "";
        day.arm = "";
        day.thigh = "";
        break;
      case Constants.LABEL:
      default:
    }
  });
  return workout;
};
