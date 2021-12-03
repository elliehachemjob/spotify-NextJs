import * as type from "../types/user";
// import axios from "axios";
// import { request } from "../../util/request";

export const setStatus = () => (dispatch: any) => {
  dispatch({
    type: type.SET_STATUS,
  });
};
