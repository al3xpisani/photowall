import { combineReducers } from "redux";

import { reducer as users } from "./Users";
import { reducer as signups } from "./SignUp";
import { reducer as addMeetups } from "./AddMeetup";

export default combineReducers({
  users,
  signups,
  addMeetups
});
