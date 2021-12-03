import * as type from "../types";

const user = (
  state = {
    status: false,
  },
  action: any
) => {
  switch (action.type) {
    case type.SET_STATUS:
      return {
        ...state,
        status: true,
      };
    // case type.SET_STATUS:
    //   return {
    //     ...state,
    //     name: action.payload,
    //   };
    default:
      return { ...state };
  }
};

export default user;
