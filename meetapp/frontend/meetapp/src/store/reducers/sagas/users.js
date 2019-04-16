import { call, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native";

import api from "~/services/api";

import userActions from "~/store/ducks/Users";

import {
  LOGIN_INVALIDO,
  ASYNCSTORAGE_USERS,
  SESSIONS
} from "react-native-dotenv";

export function* load({ userId, userPwd, navigation }) {
  var postData = {
    email: userId,
    password: userPwd
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  };

  try {
    if (!userId || !userPwd) {
      yield put(userActions.userFailure(LOGIN_INVALIDO));
      return false;
    }

    const response = yield call(
      api.post,
      `/${SESSIONS}`,
      postData,
      axiosConfig
    );
    const resp = yield AsyncStorage.setItem(
      ASYNCSTORAGE_USERS,
      JSON.stringify(response)
    );
    navigation.navigate("DashOptions");
    console.tron.log(`response api call ${JSON.stringify(response)}`);
    yield put(userActions.userSuccess(response.data));
    return true;
  } catch (error) {
    yield put(userActions.userFailure(error.message));
  }
}
