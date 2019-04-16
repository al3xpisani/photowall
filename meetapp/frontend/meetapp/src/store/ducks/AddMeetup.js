import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  meetupRequest: [
    "title",
    "description",
    "local",
    "meetupDate",
    "meetupLogo",
    "devops",
    "is_recommended",
    "event_date",
    "navigation"
  ],
  meetupSuccess: ["meetup"],
  meetupFailure: ["error"]
});

export const meetupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  meetup: null,
  error: "",
  loading: false
});

/* Reducers */

// export const

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MEETUP_REQUEST]: (state, { meetup }) =>
    state.merge({ meetup, loading: true, error: "" }),
  [Types.MEETUP_SUCCESS]: (state, { meetup }) =>
    state.merge({ meetup, loading: false, error: "" }),
  [Types.MEETUP_FAILURE]: (state, { error }) =>
    state.merge({ error, loading: false })
});
