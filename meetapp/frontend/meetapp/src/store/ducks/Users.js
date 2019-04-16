import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  userRequest: ["userId", "userPwd", "navigation"],
  userSuccess: ["user"],
  userFailure: ["error"]
});

export const UsersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  user: null,
  error: "",
  loading: false
});

/* Reducers */

// export const

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: (state, { user }) =>
    state.merge({ user, loading: true, error: "" }),
  [Types.USER_SUCCESS]: (state, { user }) =>
    state.merge({ user, loading: false, error: "" }),
  [Types.USER_FAILURE]: (state, { error }) =>
    state.merge({ error, loading: false })
});
