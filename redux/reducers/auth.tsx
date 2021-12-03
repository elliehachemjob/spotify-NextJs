import * as type from "../types/auth";

const auth = (
  state = {
    loggedTimes: 1,
  },
  action: any
) => {
  switch (action.type) {
    case type.SET_LOGGED_NUMBERS:
      return {
        ...state,
        loggedTimes: action.payload,
      };

    default:
      return { ...state };
  }
};

export default auth;
