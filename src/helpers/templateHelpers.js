import * as Constants from "../constants";

// Takes a workout template and adds data fields for use with local storage
export const expandTemplate = (template) => {
  template.days.forEach((day) => {
    switch (day.type) {
      case Constants.WORKOUT:
        day.nailedIt = false;
        day.barelyMadeIt = false;
        break;
      case Constants.STATS:
        day.weight = null;
        day.chest = null;
        day.waist = null;
        day.arm = null;
        day.thigh = null;
        break;
      case Constants.LABEL:
      default:
    }
  });
  return template;
};
