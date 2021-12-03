import * as type from "../types/auth";

export const setLoggedNumbers = (loggedNumbers: any) => (dispatch: any) => {
  dispatch({
    type: type.SET_LOGGED_NUMBERS,
    payload: loggedNumbers,
  });
};
