import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signupRequest: [
    "signupId",
    "devops",
    "signupName",
    "signupPwd",
    "navigation"
  ],
  signupSuccess: ["signup"],
  signupFailure: ["error"]
});

export const SignupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signup: null,
  error: "",
  loading: false
});

/* Reducers */

// export const

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP_REQUEST]: (state, { signup }) =>
    state.merge({ signup, loading: true, error: "" }),
  [Types.SIGNUP_SUCCESS]: (state, { signup }) =>
    state.merge({ signup, loading: false, error: "" }),
  [Types.SIGNUP_FAILURE]: (state, { error }) =>
    state.merge({ error, loading: false })
});
