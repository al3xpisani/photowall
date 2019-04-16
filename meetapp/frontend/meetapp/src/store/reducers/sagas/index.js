import { all, takeLatest } from "redux-saga/effects";

import { UsersTypes } from "~/store/ducks/Users";
import { SignupsTypes } from "~/store/ducks/SignUp";
import { meetupsTypes } from "~/store/ducks/AddMeetup";

import { load } from "./users";
import { loadSingup } from "./signups";
import { updateUserPrefs } from "./signups";
import { addMeetup } from "./addmeetups";

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.USER_REQUEST, load),
    takeLatest(SignupsTypes.SIGNUP_REQUEST, loadSingup),
    takeLatest(SignupsTypes.SIGNUP_REQUEST, updateUserPrefs),
    takeLatest(meetupsTypes.MEETUP_REQUEST, addMeetup)
  ]);
}
