import { actionTypes } from "../actions";

const defaultUserData = {
  name: "Default Name",
  company: "Default Company",
  dob: new Date()
};

const initialState = {
  userList: [defaultUserData]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addUser:
      return {
        ...state,
        userList: [...state.userList, action.userData]
      };
    case actionTypes.editUser:
      let userList = [...state.userList];
      userList.splice(action.index, 1, action.userData);
      return {
        ...state,
        userList
      };
    default:
      return state;
  }
};

export default reducer;
