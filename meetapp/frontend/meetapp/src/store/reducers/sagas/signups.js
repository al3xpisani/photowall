import { call, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native";

import api from "~/services/api";

import signupActions from "~/store/ducks/SignUp";

import {
  CAMPOSOBRIGATORIOS,
  ASYNCSTORAGE_USERS,
  ISNEWUSER,
  CREATEUSER,
  UPDATEUSERPREFS
} from "react-native-dotenv";

export function* loadSingup({ signupId, signupName, signupPwd, navigation }) {
  var postData = {
    name: signupName,
    password: signupPwd,
    email: signupId,
    devops: "null"
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  };

  try {
    if (!signupName || !signupId || !signupPwd) {
      yield put(signupActions.signupFailure(CAMPOSOBRIGATORIOS));
      return false;
    }

    const response = yield call(
      api.post,
      `/${ISNEWUSER}`,
      postData,
      axiosConfig
    );
    //usuário já existe no cadastro
    if (JSON.stringify(response.data.codeError) === "401") {
      yield put(
        signupActions.signupFailure(JSON.stringify(response.data.error))
      );
      return false;
    }

    //Cadastra usuário e valida o cadastro
    const responseSignup = yield call(
      api.post,
      `/${CREATEUSER}`,
      postData,
      axiosConfig
    );

    if (JSON.stringify(responseSignup.data.codeError) === "401") {
      yield put(
        signupActions.signupFailure(JSON.stringify(responseSignup.data.error))
      );
      return false;
    }

    const resp = yield AsyncStorage.setItem(
      ASYNCSTORAGE_USERS,
      JSON.stringify(responseSignup)
    );
    navigation.navigate("Preferences", { signupName, signupId });

    yield put(signupActions.signupSuccess(response.data));
    return true;
  } catch (error) {
    yield put(signupActions.signupFailure(error.message));
  }
}

export function* updateUserPrefs({ signupId, devops, navigation }) {
  var postData = {
    email: signupId,
    devops
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  };

  try {
    const response = yield call(
      api.post,
      `/${UPDATEUSERPREFS}`,
      postData,
      axiosConfig
    );

    navigation.navigate("DashOptions");
    yield put(signupActions.signupSuccess(response.data));
    return true;
  } catch (error) {
    yield put(signupActions.signupSuccess(error.message));
  }
}
